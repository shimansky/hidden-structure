var BossbotLeftXDistance=-10;
var BossbotRightXDistance=10;
var BossbotUpYDistance=10;
var BossbotDownYDistance=-10;
var Bosstemp2;
var Bossvertical2;
var Bossportaltemp;
var Bossportalvertical;
var BossbotLife2=500;
var toggle=1;
bossenemy2=document.getElementById('bossmonster');
figure=document.getElementById('player');


var monsterDied = new Audio('SOUND/monsterDied.mp3');
var bossmonsterAttack = new Audio('SOUND/bossmonsterAttack.mp3');

// блок функций анимации бота
bossenemy2.moveRight=function(distance) {
  var bossm2 = bossenemy2.getBoundingClientRect();
  get_coordinates(bossm2);
  this.style.backgroundImage='URL("IMG/bossMonsterRight.gif")';
if (rightTemp==1) {
  Bosstemp2=Bosstemp2+distance;
  this.style.left = Bosstemp2 + 'px';
  this.innerHTML=BossbotLife2;
    }
}
bossenemy2.moveLeft=function(distance) {
  var bossm2 = bossenemy2.getBoundingClientRect();
  get_coordinates(bossm2);
  this.style.backgroundImage='URL("IMG/bossMonsterLeft.gif")';
if (leftTemp==1) {
  Bosstemp2=Bosstemp2+distance;
  this.style.left = Bosstemp2 + 'px';
  this.innerHTML=BossbotLife2;
    }
}
bossenemy2.moveUp=function(distance) {
  var bossm2 = bossenemy2.getBoundingClientRect();
  get_coordinates(bossm2);
  this.style.backgroundImage='URL("IMG/bossMonsterRight.gif")';
if (upTemp==1) { 
  Bossvertical2=Bossvertical2+distance;
  this.style.bottom = Bossvertical2 + 'px';
  this.innerHTML=BossbotLife2;
    }
}
bossenemy2.moveDown=function(distance) {
  var bossm2 = bossenemy2.getBoundingClientRect();
  get_coordinates(bossm2);
  this.style.backgroundImage='URL("IMG/bossMonsterLeft.gif")';
if (downTemp==1) {
  Bossvertical2=Bossvertical2+distance;
  this.style.bottom = Bossvertical2 + 'px';
  this.innerHTML=BossbotLife2;
    }
}
bossenemy2.attack=function() {
  
  this.style.backgroundImage='URL("IMG/bossMonsterAttack.gif")';
  this.innerHTML=BossbotLife2;
    
}

function showbossEnemy2(){
  bossenemy2.style.display="inline-block";
  monsterPortalSound.play();
  
}

// ИИ для бота
function bossbotMove2(){
 var p = figure.getBoundingClientRect();
 var bossm2 = bossenemy2.getBoundingClientRect();

 // отслеживание столкновений с боссом
 if( ((p.bottom-bossm2.bottom)<=50 && (p.bottom-bossm2.bottom)>=-50 ) && ( (p.right-bossm2.right)<=50 && (p.right-bossm2.right)>=-50 ) ){
  if(life<0){
  panel.innerHTML="life: "+ life;
  showMassege();
  setTimeout(exit, 5000);
 
}
else{
  life-=10;
  localStorage.setItem('life', life);
  panel.innerHTML="life: " + life;
  figure.innerHTML="<span>"+life+"</span>";
  bossenemy2.attack();
  bossmonsterAttack.play();

 }
}



  if(BossbotLife2<0){
    monsterDied.play();
       
         // вставка тела мертвого монстра начало
         var deadMonster = document.createElement('div');
         deadMonster.className = "bossDeadMonster";
         deadMonster.style.left=bossenemy2.style.left;
         deadMonster.style.bottom=bossenemy2.style.bottom; 
         game.append(deadMonster);
         // вставка тела мертвого монстра конец
        clearInterval(timerBossId);
        bossenemy2.style.display="none";
        portalSound.play();
        setImgPlayerTeleportation();
        setTimeout(gameOver,3000);
  }
	try{
   var p = figure.getBoundingClientRect();
   var bossm2 = bossenemy2.getBoundingClientRect();


    if(p.right-bossm2.right<200 && p.right-bossm2.right>0){
      bossenemy2.moveRight(BossbotRightXDistance);
    }
    
     if(p.right-bossm2.right>-200 && p.right-bossm2.right<0){
      bossenemy2.moveLeft(BossbotLeftXDistance);
    }
    
      if(p.bottom-bossm2.bottom<200 && p.bottom-bossm2.bottom>0){
      bossenemy2.moveDown(BossbotDownYDistance);
    }
    
     if(p.bottom-bossm2.bottom>-200 && p.bottom-bossm2.bottom<0){
      bossenemy2.moveUp(BossbotUpYDistance);
    }

    else{

    var bossrand2=Math.floor(Math.random() * (4 - 0)) + 0;
    
    if(bossrand2==0){
      bossenemy2.moveRight(BossbotRightXDistance);
 
      
    }
    else
    if(bossrand2==1){
      bossenemy2.moveLeft(BossbotLeftXDistance);
      
      
    }
    else
    if(bossrand2==2){
      bossenemy2.moveUp(BossbotUpYDistance);
      
      
    }
    else
    if(bossrand2==3){
      bossenemy2.moveDown(BossbotDownYDistance);
      
      
    }
    
}
}
catch(e){
	
}

}


Bosstemp2=+bossenemy2.style.left.toString().slice(0, -2);
  console.log("boss monster: " + Bosstemp2);
  Bossvertical2=+bossenemy2.style.bottom.toString().slice(0, -2);
  console.log("boss monster: " + Bossvertical2);

var timerBossId = setInterval(bossbotMove2,60);

function gameOver(){
  document.location.href = "endGame.html";

}