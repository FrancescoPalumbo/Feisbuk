/*
	Università: Parthenope
	Dipartimento: Scienze e Tecnologie
	Studente: Francesco Palumbo
	Matricola: 0124/001441
	Email istituzionale: francesco.palumbo004@studenti.uniparthenope.it
*/

window.onscroll = yHandler;
var old_rand = 3;
function yHandler(){
	var wrap = document.getElementById('wrap');
	var contentHeight = wrap.offsetHeight;
	var yOffset = window.pageYOffset; 
	var y = yOffset + window.innerHeight;
	var rand =  Math.floor(Math.random() * 7);

	if(y >= contentHeight){
			if(rand != old_rand){
				switch(rand) {
	    			case 0:
	        			wrap.innerHTML += '<div class="newPost0 into-post"><a href="#"><img id="into-post-img" src="./static/img/Mark-Zuckerberg.jpg"/></a><table style="padding: 6px 10px 10px 0px; "><tr style="float: left;"><td class="into-post"><p class="text-p-right link h"><b>Mark Zuckerberg</b></p></td></tr><tr style="margin-top: -10px;"><td class="into-post"><p class="text-p-right" style="color: #81858d;">2 h • <i class="fas fa-globe"></i></p></td></tr></table><table><tr style="margin-top: 100px;"><td><p class="into-text">It is pretty much impossible to start a company in your dorm room and grow it to the scale we are at now without making some mistakes.</p></td></tr><tr><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-thumbs-up"></i> Mi piace</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-comment-alt"></i> Commenta</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-share"></i> Condividi</p></button></td></tr></table></div>';
	        			break;
	    			case 1:
	        			wrap.innerHTML += '<div class="newPost0 into-post"><a href="#"><img id="into-post-img" src="./static/img/Tim-Paterson.jpg"/></a><table style="padding: 6px 10px 10px 0px; "><tr style="float: left;"><td class="into-post"><p class="text-p-right link h"><b>Tim Paterson</b></p></td></tr><tr style="margin-top: -10px;"><td class="into-post"><p class="text-p-right" style="color: #81858d;">53 min • <i class="fas fa-user-friends"></i></p></td></tr></table><table><tr style="margin-top: 100px;"><td><p class="into-text">With all the code being written out there, who gets the credit? People like Bill Gates get it all and he has not written anything in years!</p></td></tr><tr><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-thumbs-up"></i> Mi piace</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-comment-alt"></i> Commenta</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-share"></i> Condividi</p></button></td></tr></table></div>';
	       			 	break;
	       			case 2:
	        			wrap.innerHTML += '<div class="newPost0 into-post"><a href="#"><img id="into-post-img" src="./static/img/Bill-Gates.jpg"/></a><table style="padding: 6px 10px 10px 0px; "><tr style="float: left;"><td class="into-post"><p class="text-p-right link h"><b>Bill Gates</b></p></td></tr><tr style="margin-top: -10px;"><td class="into-post"><p class="text-p-right" style="color: #81858d;">35 min • <i class="fas fa-globe"></i></p></td></tr></table><table><tr style="margin-top: 100px;"><td><p class="into-text">Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.</p></td></tr><tr><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-thumbs-up"></i> Mi piace</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-comment-alt"></i> Commenta</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-share"></i> Condividi</p></button></td></tr></table></div>';
	        			break;
	    			case 3:
	        			wrap.innerHTML += '<div class="newPost1 into-post"><a href="#"><img id="into-post-img" src="../static/img/James-Gosling.jpg"/></a><table style="padding: 6px 10px 10px 0px; "><tr style="float: left;"><td class="into-post"><p class="text-p-right link h"><b>James Gosling</b></p></td></tr><tr style="margin-top: -10px;"><td class="into-post"><p class="text-p-right" style="color: #81858d;">3 h • <i class="fas fa-user-friends"></i></p></td></tr></table><table><tr style="margin-top: 100px;"><td><p class="into-text">I went to the March For Our Lives today in Redwood City. It was so wonderful to be among people united in hope for positive change. It’s so hard to face the news these days, it’s nice to see something Good. Votes are supposed to count more than cash.<br><img id="post-img" src="../static/img/James-Gosling-post.jpg"/></p></td></tr><tr><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-thumbs-up"></i> Mi piace</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-comment-alt"></i> Commenta</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-share"></i> Condividi</p></button></td></tr></table></div>';
	        			break;
	    			case 4:
	        			wrap.innerHTML += '<div class="newPost1 into-post"><a href="#"><img id="into-post-img" src="./static/img/kevin-mitnick.jpg"/></a><table style="padding: 6px 10px 10px 0px; "><tr style="float: left;"><td class="into-post"><p class="text-p-right link h"><b>Kevin Mitnick</b></p></td></tr><tr style="margin-top: -10px;"><td class="into-post"><p class="text-p-right" style="color: #81858d;">5 h • <i class="fas fa-globe"></i></p></td></tr></table><table><tr style="margin-top: 100px;"><td><p class="into-text">I went to the March For Our Lives today in Redwood City. It was so wonderful to be among people united in hope for positive change. It’s so hard to face the news these days, it’s nice to see something Good. Votes are supposed to count more than cash.<br><img id="post-img" src="../static/img/kevin-mitnick-post.jpg"/></p></td></tr><tr><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-thumbs-up"></i> Mi piace</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-comment-alt"></i> Commenta</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-share"></i> Condividi</p></button></td></tr></table></div>';
	        			break;
	    			case 5:
	        			wrap.innerHTML += '<div class="newPost1 into-post"><a href="#"><img id="into-post-img" src="./static/img/steve-wozniak.jpg"/></a><table style="padding: 6px 10px 10px 0px; "><tr style="float: left;"><td class="into-post"><p class="text-p-right link h"><b>Steve Wozniak</b></p></td></tr><tr style="margin-top: -10px;"><td class="into-post"><p class="text-p-right" style="color: #81858d;">27 min • <i class="fas fa-user-friends"></i></p></td></tr></table><table><tr style="margin-top: 100px;"><td><p class="into-text">My goal was not to make a ton of money. It was to build good computers.<br> #AppleWatch #SteveWozniak<br><img id="post-img" src="../static/img/steve-wozniak-post.jpg"/></p></td></tr><tr><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-thumbs-up"></i> Mi piace</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-comment-alt"></i> Commenta</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-share"></i> Condividi</p></button></td></tr></table></div>';
	        			break;
	    			case 6:
	        			wrap.innerHTML += '<div class="newPost0 into-post"><a href="#"><img id="into-post-img" src="./static/img/Tim-Berners.jpg"/></a><table style="padding: 6px 10px 10px 0px; "><tr style="float: left;"><td class="into-post"><p class="text-p-right link h"><b>Tim Berners-Lee</b></p></td></tr><tr style="margin-top: -10px;"><td class="into-post"><p class="text-p-right" style="color: #81858d;">4 h • <i class="fas fa-globe"></i></p></td></tr></table><table><tr style="margin-top: 100px;"><td><p class="into-text">It is difficult to imagine the power that you are going to have when so many different sorts of data are available.</p></td></tr><tr><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-thumbs-up"></i> Mi piace</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-comment-alt"></i> Commenta</p></button></td><td class="like-comment"><button type="button" class="btn-like-comment"><p><i class="fas fa-share"></i> Condividi</p></button></td></tr></table></div>';
	        			break;
				}
				old_rand = rand;
			}
	}
}
