
var left;
var bottom;
var life = 100;
var intervalActorMoveRight;
var IntervalActorMoveDown;
var IntervaLiftMoveDown;
var key;
var monsterleft;


window.onload = function(){
monster=document.getElementById("monster");
monster.style.backgroundImage='URL("IMG/monster_l.gif")';
monster.scrollIntoView({block: "center", inline: "center"});
monster.style.transition="all 0.2s ease";
monster.style.display="none";
wievport=document.getElementById("wievport");

}




var lift=document.getElementById('exit_door');
var door=document.getElementById('locked_door_black');
var message=document.getElementById('phoneBackground');
var groundCover=document.getElementById('groundLongCover');
var lift=document.getElementById('exit_door');

  
  

  bottomLift=+lift.style.bottom.toString().slice(0, -2);
  
  monsterleft=+monster.style.left.toString().slice(0, -2);


// pop-up window
function info(){
    alert(" ...");
}




// show message

function showMessage(){
	message.style.display="inline-block";
}


function hideMessage(){
	message.style.display="none";
	scenePlayScenery();
}

function disableLift(){
  lift.style.backgroundImage='URL("IMG/liftDestroed.gif")';
}



function monsterMove(){ 
 monster.style.display="inline-block";
 monsterleft=monsterleft-5;
 monster.style.left=monsterleft+"px"; 
 wievport.scrollBy(-5, 0);
 }

function runMonster(){
  timer = setInterval(monsterMove,50);
}

function stopMonster(){
  clearInterval(timer);
}

function collapseWievport(){
  wievport.style.height="0px";
  wievport.style.border="1px solid red";
}

// sequence of actions player animations in the scene

function scenePlayScenery(){
       
       setTimeout(disableLift,2000);
       setTimeout(runMonster,3000); 
       setTimeout(stopMonster,7000);
       setTimeout(collapseWievport,7000);
       
       

}

showMessage();




