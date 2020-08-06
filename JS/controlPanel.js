var controlPanel = document.getElementById("controlPanel");
var tempArr = document.getElementsByClassName("ws");
var controlPanellOff = new Audio('SOUND/controlPanelOff.mp3');
var c = controlPanel.getBoundingClientRect();
var toggleMainControlPanelOff = 0;
var accessCodes=[0xff,0xfe,0x100,0x8707,0x22d,0x3a4,0x2ca,0x1be,0x229,0x22,0x163a];
var error;

figure=document.getElementById('player');
monsterPortal=document.getElementById('monsterPortal');

controlPanel.ask=function(){
        // сохранение данных о посещении уровня при выходе и повторном входе
        localStorage.setItem('level'+ tempLocation, 1);
        
          clearInterval(timerLeft);
          flagLeft=0;
          leftInMove=0;
          if(rightInMove==0 && upInMove==0 && downInMove==0){
              figure.style.backgroundImage='URL("IMG/player_l.png")';
       }
    figure.moveLeft(-50);
    
    localStorage.setItem('lock'+[tempLocation+1], 0);
        toggle=0;
        monsterPortal.style.display="none";
        controlPanel.style.backgroundImage='URL("IMG/controlPanelOFF.jpg")';
        controlPanellOff.play();
        try{
            off();
            turelActive=0;
            bullet.style.display="none";
            toggle=0;
            }
        catch{

            }
        try{
          error=0;
        }
        catch{

            }
            
    	for(i=tempArr.length;i>=0;i--){
    		console.log("control panel: ACCESS GUARANTED!");
    		try{tempArr[i-1].className="ud";
      }
        catch{

            }
    		
    	}
   
}


function controlAccessMode(){
    var p = figure.getBoundingClientRect();
    var c = controlPanel.getBoundingClientRect();
    if (p.right==c.right&&p.bottom==c.bottom) {
        if(toggleMainControlPanelOff==0){
             toggleMainControlPanelOff=1;
             controlPanel.ask();
        }
    }
}

setInterval(controlAccessMode,500);
