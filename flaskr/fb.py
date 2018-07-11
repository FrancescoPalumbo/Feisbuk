from flask import Flask, render_template, url_for, request, session, redirect
from flask_pymongo import PyMongo
import bcrypt

app = Flask(__name__)

app.secret_key = 'mysecret'

# connect to MongoDB with the defaults
app.config['MONGO_DBNAME'] = 'FB_LOGIN'
mongo = PyMongo(app)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    users = mongo.db.USERS
    login_user = users.find_one({'num_email' : request.form['num_email']})

    if login_user:
        if bcrypt.hashpw(request.form['pass'].encode('utf-8'), login_user['password'].encode('utf-8')) == login_user['password'].encode('utf-8'):
            session['num_email'] = request.form['num_email']

            user_name = login_user['name']
            user_surname = login_user['surname']

            return render_template('homepage.html', name = user_name, surname = user_surname)
        return 'Invalid password'
    return 'Invalid email'

@app.route('/register', methods=['POST'])
def register():
    users = mongo.db.USERS
    existing_user = users.find_one({'num_email' : request.form['num_email']})

    if existing_user is None:
        hashpass = bcrypt.hashpw(request.form['pass'].encode('utf-8'), bcrypt.gensalt())
        users.insert({'name' : request.form['name'],'surname' : request.form['surname'], 'num_email' : request.form['num_email'], 'gender' : request.form['gen'], 'bday' : {'day' : request.form['day'], 'month' : request.form['month'], 'year' : request.form['year'] }, 'password' : hashpass})
        session['num_email'] = request.form['num_email']
        
        return render_template('homepage.html', name = request.form['name'], surname = request.form['surname'])
    
    return 'That email already exists!'

@app.route('/logout', methods=['POST'])
def logout():
    session.clear()
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.secret_key = 'mysecret'
    app.run(debug=True)