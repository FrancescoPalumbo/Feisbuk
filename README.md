# Feisbuk
Feisbuk is an imitation-game of the original social network. It is created for:
 - Imitate the registration and login page of Facebook;
 - Imitate the homepage page of Facebook with the random posts.

Project presentation of Feisbuk:
 - Part 1: https://drive.google.com/open?id=1q49HJAiPLFnHCtTiCPBL2VuvKYXlPV1hYa4wMIhYUps
 - Part 2: https://drive.google.com/open?id=1_4glaCNpk4fabQEFu8jm1I9b-C4wq0sPxqMqoniWPV8

# Installation
Tested on Ubuntu 18.04

Make sure you are running MongoDB on the default port (27018)

**Clone the repository and create the virtual environment for Python:**
```
$ git clone https://github.com/FrancescoPalumbo/Feisbuk.git
$ cd Feisbuk
$ python3 -m venv venv
```
**Activate the environment:**
```
$ . venv/bin/activate
```
**Install the required dependecy:**
```
$ pip install -r requirements.txt

```
**Run the Server:**
```
$ cd flaskr
$ flask run
```
