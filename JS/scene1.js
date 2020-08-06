var playerLeftXDistance=-10;
var playerRightXDistance=10;
var playerUpYDistance=10;
var playerDownYDistance=-10;
var left;
var bottom;

var intervalActorMoveRight;
var IntervalActorMoveDown;
var IntervaLiftMoveDown;
var key;

var figure=document.getElementById('player');

var message=document.getElementById('phoneBackground');


  left=+figure.style.left.toString().slice(0, -2);

  bottom=+figure.style.bottom.toString().slice(0, -2);
  
  


// functions to animate the player in the scene

function setBackground(){
	figure.style.backgroundImage='URL("IMG/player_r.png")';
}

function actorMoveRight(){
    figure.style.backgroundImage='URL("IMG/player_r.gif")';
    // figure.style.transition= "left 0.2s linear";
    left=left+10;
    figure.style.left = left +'px';
    wievport.scrollBy(10, 0);
    steps.play();

}




function runDown(){
	 IntervalActorMoveDown = setInterval(actorMoveDown,100);
}


function runRight(){
     intervalActorMoveRight = setInterval(actorMoveRight,100);	
}

function stoprunRight(){
	clearInterval(intervalActorMoveRight);

              figure.style.backgroundImage='URL("IMG/player_l.png")';
}

function stoprunDown(){
	clearInterval(IntervalActorMoveDown);
}




// show message

function showMessage(){
	message.style.display="inline-block";
}


function hideMessage(){
	message.style.display="none";
	
}


  





// sequence of actions player animations in the scene

function scenePlayScenery(){
       setTimeout(runRight,500);
       setTimeout(stoprunRight,2600);
       
      

}

scenePlayScenery();




