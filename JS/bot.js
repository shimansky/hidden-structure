var botLeftXDistance=-10;
var botRightXDistance=10;
var botUpYDistance=10;
var botDownYDistance=-10;
var temp;
var vertical;
// var portaltemp;
// var portalvertical;
var botLife=50;
var toggle=1;
enemy=document.getElementById('monster');
// var m = enemy.getBoundingClientRect();

var monsterDied = new Audio('SOUND/monsterDied.mp3');
var monsterPortalSound = new Audio('SOUND/monsterPortal.mp3');

function bot_get_coordinates(unit){
  var m = enemy.getBoundingClientRect();
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
enemy.moveRight=function(distance) {
  var m = enemy.getBoundingClientRect();
  bot_get_coordinates(m);
  this.style.backgroundImage='URL("IMG/monster_r.gif")';
if (rightTemp==1) {
  temp=temp+distance;
  this.style.left = temp + 'px';
  this.innerHTML=botLife;
    }
}
enemy.moveLeft=function(distance) {
  var m = enemy.getBoundingClientRect();
  bot_get_coordinates(m);
  this.style.backgroundImage='URL("IMG/monster_l.gif")';
if (leftTemp==1) {
  temp=temp+distance;
  this.style.left = temp + 'px';
  this.innerHTML=botLife;
    }
}
enemy.moveUp=function(distance) {
  var m = enemy.getBoundingClientRect();
  bot_get_coordinates(m);
  this.style.backgroundImage='URL("IMG/monster_r.gif")';
if (upTemp==1) { 
  vertical=vertical+distance;
  this.style.bottom = vertical + 'px';
  this.innerHTML=botLife;
    }
}
enemy.moveDown=function(distance) {
  var m = enemy.getBoundingClientRect();
  bot_get_coordinates(m);
  this.style.backgroundImage='URL("IMG/monster_l.gif")';
if (downTemp==1) {
  vertical=vertical+distance;
  this.style.bottom = vertical + 'px';
  this.innerHTML=botLife;
    }
}


function showEnemy(){
  enemy.style.display="inline-block";
  monsterPortalSound.play();
}

function insertDeadBotBody() {
         var deadMonster = document.createElement('div');
         deadMonster.className = "deadMonster";
         deadMonster.style.left=enemy.style.left;
         deadMonster.style.bottom=enemy.style.bottom; 
         game.append(deadMonster);
}

// ИИ для бота
function botMove(){
  if(botLife<0){
    monsterDied.play();
       if(toggle==0){
         // вставка тела мертвого монстра начало
         insertDeadBotBody();
        // вставка тела мертвого монстра конец
        clearInterval(timerId);
        enemy.style.display="none";
       }
 else{
  // вставка тела мертвого монстра начало
    insertDeadBotBody();
  // вставка тела мертвого монстра конец

    enemy.style.display="none";
    setTimeout(showEnemy,2000);
    botLife=50;
    temp=portaltemp;
    vertical=portalvertical;
    enemy.style.left=temp+'px';
    enemy.style.bottom=vertical+'px';
    
  }
  }
	try{
   var p = figure.getBoundingClientRect();
   var m = enemy.getBoundingClientRect();


    if(p.right-m.right<200 && p.right-m.right>0){
      enemy.moveRight(botRightXDistance);
    }
    
     if(p.right-m.right>-200 && p.right-m.right<0){
      enemy.moveLeft(botLeftXDistance);
    }
    
      if(p.bottom-m.bottom<200 && p.bottom-m.bottom>0){
      enemy.moveDown(botDownYDistance);
    }
    
     if(p.bottom-m.bottom>-200 && p.bottom-m.bottom<0){
      enemy.moveUp(botUpYDistance);
    }

    else{

    var rand=Math.floor(Math.random() * (4 - 0)) + 0;
    
    if(rand==0){
      enemy.moveRight(botRightXDistance);
 
      
    }
    else
    if(rand==1){
      enemy.moveLeft(botLeftXDistance);
      
      
    }
    else
    if(rand==2){
      enemy.moveUp(botUpYDistance);
      
      
    }
    else
    if(rand==3){
      enemy.moveDown(botDownYDistance);
      
      
    }
}
}
catch(e){
	
}

}

