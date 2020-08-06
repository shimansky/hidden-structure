var botLeftXDistance=-10;
var botRightXDistance=10;
var botUpYDistance=10;
var botDownYDistance=-10;
var temp2;
var vertical2;
// var portaltemp;
// var portalvertical;
var botLife2=50;
var toggle=1;
enemy2=document.getElementById('monster2');
// var m2 = enemy2.getBoundingClientRect();

var monsterDied = new Audio('SOUND/monsterDied.mp3');
var monsterPortalSound = new Audio('SOUND/monsterPortal.mp3');

function bot_get_coordinates(unit){
  var m2 = enemy2.getBoundingClientRect();
  // определение имени класса элемента "слева" от юнита
left_empty = document.elementFromPoint((unit.right-55),(unit.bottom-5)).className;
if ( left_empty!="world" && left_empty!="we" && left_empty!="person" && left_empty!="w" && left_empty!="wc"&& left_empty!="ws" && left_empty!="wp" &&left_empty!="locked_door_white"&&left_empty!="locked_door_black" ) {
 leftTemp=1;
 
}
else{
  leftTemp=0;
}

// определение имени класса элемента "справа" от юнита
right_empty  = document.elementFromPoint((unit.right+5),(unit.bottom-5)).className;
if ( right_empty!="world" && right_empty!="we" && right_empty!="person" && right_empty!="w" && right_empty!="wc"&& right_empty!="ws" && right_empty!="wp" &&right_empty!="locked_door_white"&&right_empty!="locked_door_black" ) {
 rightTemp=1;
 
}
else{
  rightTemp=0;
}

// определение имени класса элемента "снизу" от юнита
down_empty = document.elementFromPoint((unit.right-25),(unit.bottom+5)).className;
if ( down_empty!="world" && down_empty!="we" && down_empty!="person" && down_empty!="w" && down_empty!="wc"&& down_empty!="ws" && down_empty!="wp" &&down_empty!="locked_door_white"&&down_empty!="locked_door_black" ) {
 downTemp=1;
 
}
else{
  downTemp=0;
}

// определение имени класса элемента "сверху" от юнита
up_empty = document.elementFromPoint((unit.right-25),(unit.bottom-55)).className;
if ( up_empty!="world" && up_empty!="we" && up_empty!="person" && up_empty!="w" && up_empty!="wc"&& up_empty!="ws" && up_empty!="wp" &&up_empty!="locked_door_white"&&up_empty!="locked_door_black" ) {
 upTemp=1;
 
}
else{
  upTemp=0;
}
}

// блок функций анимации бота
enemy2.moveRight=function(distance) {
  var m2 = enemy2.getBoundingClientRect();
  bot_get_coordinates(m2);
  this.style.backgroundImage='URL("IMG/monster_r.gif")';
if (rightTemp==1) {
  temp2=temp2+distance;
  this.style.left = temp2 + 'px';
  this.innerHTML=botLife2;
    }
}
enemy2.moveLeft=function(distance) {
  var m2 = enemy2.getBoundingClientRect();
  bot_get_coordinates(m2);
  this.style.backgroundImage='URL("IMG/monster_l.gif")';
if (leftTemp==1) {
  temp2=temp2+distance;
  this.style.left = temp2 + 'px';
  this.innerHTML=botLife2;
    }
}
enemy2.moveUp=function(distance) {
  var m2 = enemy2.getBoundingClientRect();
  bot_get_coordinates(m2);
  this.style.backgroundImage='URL("IMG/monster_r.gif")';
if (upTemp==1) { 
  vertical2=vertical2+distance;
  this.style.bottom = vertical2 + 'px';
  this.innerHTML=botLife2;
    }
}
enemy2.moveDown=function(distance) {
  var m2 = enemy2.getBoundingClientRect();
  bot_get_coordinates(m2);
  this.style.backgroundImage='URL("IMG/monster_l.gif")';
if (downTemp==1) {
  vertical2=vertical2+distance;
  this.style.bottom = vertical2 + 'px';
  this.innerHTML=botLife2;
    }
}


function showEnemy2(){
  enemy2.style.display="inline-block";
  monsterPortalSound.play();
}

function insertDeadBot2Body() {
  var deadMonster = document.createElement('div');
    deadMonster.className = "deadMonster";
    deadMonster.style.left=enemy2.style.left;
    deadMonster.style.bottom=enemy2.style.bottom; 
    game.append(deadMonster);
}

// ИИ для бота
function botMove2(){
  if(botLife2<0){
    monsterDied.play();
       if(toggle==0){
         // вставка тела мертвого монстра начало
         insertDeadBot2Body();
         // вставка тела мертвого монстра конец
        clearInterval(timerId2);
        enemy2.style.display="none";
       }
 else{
  // вставка тела мертвого монстра начало
   insertDeadBot2Body();
  // вставка тела мертвого монстра конец

    enemy2.style.display="none";
    setTimeout(showEnemy2,2000);
    botLife2=50;
    temp2=portaltemp;
    vertical2=portalvertical;
    enemy2.style.left=temp2+'px';
    enemy2.style.bottom=vertical2+'px';
    
  }
  }
	try{
   var p = figure.getBoundingClientRect();
   var m2 = enemy2.getBoundingClientRect();


    if(p.right-m2.right<200 && p.right-m2.right>0){
      enemy2.moveRight(botRightXDistance);
    }
    
     if(p.right-m2.right>-200 && p.right-m2.right<0){
      enemy2.moveLeft(botLeftXDistance);
    }
    
      if(p.bottom-m2.bottom<200 && p.bottom-m2.bottom>0){
      enemy2.moveDown(botDownYDistance);
    }
    
     if(p.bottom-m2.bottom>-200 && p.bottom-m2.bottom<0){
      enemy2.moveUp(botUpYDistance);
    }

    else{

    var rand2=Math.floor(Math.random() * (4 - 0)) + 0;
    
    if(rand2==0){
      enemy2.moveRight(botRightXDistance);
 
      
    }
    else
    if(rand2==1){
      enemy2.moveLeft(botLeftXDistance);
      
      
    }
    else
    if(rand2==2){
      enemy2.moveUp(botUpYDistance);
      
      
    }
    else
    if(rand2==3){
      enemy2.moveDown(botDownYDistance);
      
      
    }
}
}
catch(e){
	
}

}

