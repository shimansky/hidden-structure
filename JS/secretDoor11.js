secretLift=document.getElementById('secretLift');
figure=document.getElementById('player');




function watchSecret(){
	var p = figure.getBoundingClientRect();
    var sec = secretLift.getBoundingClientRect();
       if (( (p.bottom-sec.bottom)<=25 && (p.bottom-sec.bottom)>=-25 ) && ( (p.right-sec.right)<=25 && (p.right-sec.right)>=-25 )) {
            figure.style.display="none";
            tab = document.createElement('div');
            tab.className = "tab";
            tab.innerHTML='You find the secret Lift!!!' ;
            tab.style.left=figure.style.left;
            tab.style.bottom=figure.style.bottom;
            inTeleportation=1;
            game.append(tab);
            accessCard.play();
            flagLeft=0;
            leftInMove=0;
            clearInterval(timerLeft);
            flagRight=0;
            rightInMove=0;
            clearInterval(timerRight);
            flagDown=0;
            downInMove=0;
            clearInterval(timerDown);
            flagUp=0;
            upInMove=0;
            clearInterval(timerUp);
            changePlayerImgThenButtonUp();
            clearInterval(timerId);
            clearInterval(timerId2);
            localStorage.setItem('cells', cells);
            localStorage.setItem('sCells', sCells);
            setTimeout(goToURL,3000);
       }
     }
function goToURL(){
	document.location.href = "room11.html";
}
setInterval(watchSecret,100);