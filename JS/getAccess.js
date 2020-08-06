var animExitLift = document.getElementById('animExitLift');


function controlPlayerPosition(){
	 clearInterval(timerLeft);
	 clearInterval(timerRight);
	      flagRight=0;
          flagLeft=0;
          rightInMove=0;
          leftInMove=0;
          if(rightInMove==0 && upInMove==0 && downInMove==0){
              figure.style.backgroundImage='URL("IMG/player_l.png")';
       }
    figure.moveLeft(-50);
}



function askPassword(){
	var accessCodeInPizzeria=prompt("enter ACCESS code:").toLowerCase();
  if(accessCodeInPizzeria=="6702"){
  	document.location.href = "elevator.html";
  }
  else
  if(accessCodeInPizzeria=="0014"){
    document.location.href = "room14.html";
  }
  else
  if(accessCodeInPizzeria=="0013"){
    document.location.href = "room13.html";
  }
  else
  if(accessCodeInPizzeria=="0011"){
    document.location.href = "room11.html";
  }
  else{
  	alert("wrong ACCESS code!");
  }
}


function getAccess(){
	 var p = figure.getBoundingClientRect();
     var anEx = animExitLift.getBoundingClientRect();
   if (( (p.bottom-anEx.bottom)<=25 && (p.bottom-anEx.bottom)>=-25 ) && ( (p.right-anEx.right)<=25 && (p.right-anEx.right)>=-25 ) ) {
       controlPlayerPosition();
       setTimeout(askPassword,200);
     }
 }

setInterval(getAccess, 500);