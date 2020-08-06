var hint=document.getElementById('hint');

function showHint01(){
var p = figure.getBoundingClientRect();
var ht=hint.getBoundingClientRect();
if (( (p.bottom-ht.bottom)<=25 && (p.bottom-ht.bottom)>=-25 ) && ( (p.right-ht.right)<=25 && (p.right-ht.right)>=-25 ) ) {
    console.log("you have a tab!");
         tab = document.createElement('div');
         tab.className = "tab";
         if (language==1){
               tab.innerHTML= '16.21PM системный сбой: - главный сервер на 9 этаже не отвечает на запросы! Код доступа серверу сброшен на значение: 0100 <button onclick="closeHint()">ok</button>'} 
         else{
               tab.innerHTML= '16.21PM system failure: - the main server on the 9th floor does not respond to requests! Server access code reset to: 0100 <button onclick="closeHint()">ok</button>' };
         tab.style.left=figure.style.left;
         tab.style.bottom=figure.style.bottom;
         inTeleportation=1;
         game.append(tab);
         hint.style.display="none";
         picSound.play();
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
    
  }

}









function closeHint(){
  inTeleportation=0;
  tab.style.display="none";
    picSound.play();
    timerId = setInterval(botMove,100);
  if(buferLocation=="ctor00.html"){
       clearInterval(timerId);
       } 
timerId2 = setInterval(botMove2,100);
  if(buferLocation=="ctor00.html"){
       clearInterval(timerId2);
       } 
    // setTimeout(function(){hint.style.display="inline-block"},3000);
}

setInterval(showHint01,200);