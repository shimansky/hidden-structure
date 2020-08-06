var mainServer = document.getElementById("mainServer");
var tempArr = document.getElementsByClassName("ws");
var mainServerOff = new Audio('SOUND/mainServerOff.mp3');
var toggleMainServerOff = 0;


figure=document.getElementById('player');
monsterPortal=document.getElementById('monsterPortal');

mainServer.disabled=function(){
    mainServer.style.backgroundImage='URL("IMG/se.png")';
    
}


function controlServerDisabled(){
    var p = figure.getBoundingClientRect();
    var ms = mainServer.getBoundingClientRect();
  if (( (p.bottom-ms.bottom)<=25 && (p.bottom-ms.bottom)>=-25 ) && ( (p.right-ms.right)<=25 && (p.right-ms.right)>=-25 ) ) {
    if(toggleMainServerOff==0){
        toggleMainServerOff=1;
        mainServerOff.play();
        mainServer.disabled();
        }
    }
}

setInterval(controlServerDisabled,500);
