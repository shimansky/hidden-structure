// глобальные пременные для CSS и построения карты уровня
var locator;
var tempLocation;
var buferLocation;
var r = /\d+/;
var row = 30;
var col = 30;
var flag = 1;
var timerId;
var newMap =["["];
var p;
var error=0;
var inTeleportation=0;
var language = localStorage.getItem('lang');
var flagPistol = +localStorage.getItem('flagPistol');
var flagShootgun = +localStorage.getItem('flagShootgun');
var tab;

// уровень урона наносимый игроком
var attack = 5;

// установка уровня жизни игрока из local storage
var life = +localStorage.getItem('life');


// дефолтные значения для элементов окружающих юнита
var upTemp=0;
var downTemp=0;
var leftTemp=0;
var rightTemp=0;

// главные звуки
var picSound = new Audio('SOUND/picSound.mp3');
var accessCard = new Audio('SOUND/accessCard.mp3');
var pickUpPistol = new Audio('SOUND/pickUpPistol.mp3');
var medikKit = new Audio('SOUND/medikKit.mp3');
var portalSound = new Audio('SOUND/teleport.mp3');
var modulSound = new Audio('SOUND/modul.mp3');
var monsterAttack = new Audio('SOUND/monsterAttack.mp3');







// Определяем адрес в строке и загружаем карту уровня
getLocation();
loadMap();




// функция, выполняется при загрузке - находит элементы по ID и присваивает им имена
window.onload = function(){
render();
wievport=document.getElementById('wievport');
iconBlackCard=document.getElementById('iconBlackCard');
iconWhiteCard=document.getElementById('iconWhiteCard');
iconPistol=document.getElementById('iconPistol');
iconShootgun=document.getElementById('iconShootgun');
setCoordinatesPlayerMonster();
keywhite=document.getElementById('key_card_white');
keyblack=document.getElementById('key_card_black');
lock_white=document.getElementById('locked_door_white');
lock_black=document.getElementById('locked_door_black');
exit_door=document.getElementById('exit_door');
medicKit=document.getElementById('medicKit');
status=document.getElementById('panel');
falseDoor=document.getElementById('exit_door');
portal=document.getElementById('portal');
panel.innerHTML="life: " + life;
mod1=document.getElementById('mod1');
mod2=document.getElementById('mod2');
mod3=document.getElementById('mod3');
mod4=document.getElementById('mod4');
mod5=document.getElementById('mod5');
doc=document.getElementById('doc');
monsterPortal=document.getElementById('monsterPortal');

pistolCells=document.getElementById('pistolCells');
setCurrentView();
console.log("flagPistol: " + flagPistol + ", flagShootgun: " + flagShootgun);
if(flagPistol==1){
  iconPistol.style.display="inline-block";
   iconPistol.innerHTML=cells;
}
if(flagShootgun==1){
  iconShootgun.style.display="inline-block";
   iconShootgun.innerHTML=sCells;
}

timerId = setInterval(botMove,100);
  if(buferLocation=="ctor00.html"){
       clearInterval(timerId);
       } 
timerId2 = setInterval(botMove2,100);
  if(buferLocation=="ctor00.html"){
       clearInterval(timerId2);
       } 
getIdOfDiv();
setIDOfDiv();
};


try{
  // установка координат портала для монстров
 monsterPortal=document.getElementById('monsterPortal');
 portaltemp=+monsterPortal.style.left.toString().slice(0, -2);
 portalvertical=+monsterPortal.style.bottom.toString().slice(0, -2);
}

catch{
  
}


// загрузка файла карты уровня
function loadMap(){
var script=document.createElement("script");
script.src='MAPS/room'+ (tempLocation) + '.js';
document.getElementsByTagName('head')[0].appendChild(script);
}

// сотрисовка карты уровня из подгруженого файла
function render () {
    for (var r = 0; r < row; r++) {
        for (var c = 0; c < col; c++) {
            var tile = map[ r ][ c ];
            let div = document.createElement('div');
            div.className = tile;
            div.innerHTML = ("&nbsp");
            game.append(div);
        }

    }
}


// логика работы редактора карт
function getIdOfDiv(){
  try{
document.querySelector('#editor').addEventListener('click', function(e){ 
  tempClassName= e.target.className; 
  console.log(tempClassName);
  return tempClassName;
});
 }
 catch{
  console.log("editor not loaded");
 }
}

function setIDOfDiv(){
  if(tempLocation==0){
  try{
document.querySelector('#game').addEventListener('click', function(e){ 
  e.target.className = tempClassName; 
  console.log(tempClassName);
});
 }
 catch{
  console.log("target not loaded");
 }
 }
}



// установка начальных координат монстров, игрока и портала на карте
function setCoordinatesPlayerMonster(){
  left=+figure.style.left.toString().slice(0, -2);
  console.log("player: " + left);
  bottom=+figure.style.bottom.toString().slice(0, -2);
  console.log("player: " + bottom);

  temp=+enemy.style.left.toString().slice(0, -2);
  console.log("monster: " + temp);
  vertical=+enemy.style.bottom.toString().slice(0, -2);
  console.log("monster: " + vertical);

  temp2=+enemy2.style.left.toString().slice(0, -2);
  console.log("monster2: " + temp2);
  vertical2=+enemy2.style.bottom.toString().slice(0, -2);
  console.log("monster2: " + vertical2);

  portaltemp=+monsterPortal.style.left.toString().slice(0, -2);
  portalvertical=+monsterPortal.style.bottom.toString().slice(0, -2);
  // portaltemp=temp;
  // portalvertical=vertical;
 
}



// Определение URL страницы на данный момент
function getLocation(){
  locator = window.location;
  buferLocation=locator.toString().slice(-11);
  tempLocation = buferLocation.match(r);
  tempLocation = +tempLocation.toString();
  console.log(buferLocation);
  console.log(tempLocation);
  
}


// функция определения координат игрока при столкновениях с монстром и вещами
function get_coordinates(unit){

  var p = figure.getBoundingClientRect();
  var m = enemy.getBoundingClientRect();
  var m2 = enemy2.getBoundingClientRect();
  var bul = bullet.getBoundingClientRect();
  var k = keywhite.getBoundingClientRect();
  var b = keyblack.getBoundingClientRect();
  var kit = medicKit.getBoundingClientRect();
  var teleport = portal.getBoundingClientRect();
  var gun = pistol.getBoundingClientRect();
  var sGun = shootGun.getBoundingClientRect();
  var m1= mod1.getBoundingClientRect();
  var mo2= mod2.getBoundingClientRect();
  var m3= mod3.getBoundingClientRect();
  var m4= mod4.getBoundingClientRect();
  var m5= mod5.getBoundingClientRect();
  var ex = exit_door.getBoundingClientRect();
  var pc = pistolCells.getBoundingClientRect();
  var sc = shootgunCells.getBoundingClientRect();
  var sd = doc.getBoundingClientRect();




// подбор модулей с пола
if (( (p.bottom-m1.bottom)<=25 && (p.bottom-m1.bottom)>=-25 ) && ( (p.right-m1.right)<=25 && (p.right-m1.right)>=-25 ) ) {
  collectModul(mod1);
  modulSound.play();
}

if (( (p.bottom-mo2.bottom)<=25 && (p.bottom-mo2.bottom)>=-25 ) && ( (p.right-mo2.right)<=25 && (p.right-mo2.right)>=-25 ) ) {
  collectModul(mod2);
  modulSound.play();
}

if (( (p.bottom-m3.bottom)<=25 && (p.bottom-m3.bottom)>=-25 ) && ( (p.right-m3.right)<=25 && (p.right-m3.right)>=-25 ) ) {
  collectModul(mod3);
  modulSound.play();
}

if (( (p.bottom-m4.bottom)<=25 && (p.bottom-m4.bottom)>=-25 ) && ( (p.right-m4.right)<=25 && (p.right-m4.right)>=-25 ) ) {
  collectModul(mod4);
  modulSound.play();
}

if (( (p.bottom-m5.bottom)<=25 && (p.bottom-m5.bottom)>=-25 ) && ( (p.right-m5.right)<=25 && (p.right-m5.right)>=-25 ) ) {
  collectModul(mod5);
  modulSound.play();
}




// подбор пистолета с пола
if (( (p.bottom-gun.bottom)<=25 && (p.bottom-gun.bottom)>=-25 ) && ( (p.right-gun.right)<=25 && (p.right-gun.right)>=-25 ) ) {
   localStorage.setItem('flagPistol', 1);
   flagPistol=1;
   flagSelect=2;
   cells+=10;
   iconPistol.innerHTML=cells;
   pistol.style.display="none";
   iconPistol.style.display="inline-block";
   iconPistol.innerHTML=cells;
   iconPistol.style.border="1px solid red";
   iconShootgun.style.border="none";
   pickUpPistol.play();
}

// подбор ружья с пола
if (( (p.bottom-sGun.bottom)<=25 && (p.bottom-sGun.bottom)>=-25 ) && ( (p.right-sGun.right)<=25 && (p.right-sGun.right)>=-25 ) ) {
   localStorage.setItem('flagShootgun', 1);
   flagShootgun=1;
   flagSelect=3; 
   sCells+=5;
   iconShootgun.innerHTML=sCells;
   shootGun.style.display="none";
   iconShootgun.style.display="inline-block";
   iconShootgun.style.border="1px solid red";
   iconShootgun.innerHTML=sCells;
   iconPistol.style.border="none";
   iconShootgun.style.border="1px solid red";
   pickUpPistol.play();
}


// подбор патронов для пистолета
if (( (p.bottom-pc.bottom)<=25 && (p.bottom-pc.bottom)>=-25 ) && ( (p.right-pc.right)<=25 && (p.right-pc.right)>=-25 ) ) {
   cells+=10;
   iconPistol.innerHTML=cells;
   pistolCells.style.display="none";
   pickUpPistol.play();
}

// подбор патронов для ружья
if (( (p.bottom-sc.bottom)<=25 && (p.bottom-sc.bottom)>=-25 ) && ( (p.right-sc.right)<=25 && (p.right-sc.right)>=-25 ) ) {
   sCells+=5;
   iconShootgun.innerHTML=sCells;
   shootgunCells.style.display="none";
   pickUpPistol.play();
}


// логика работы дверей и карточек-ключей
if (( (p.bottom-k.bottom)<=25 && (p.bottom-k.bottom)>=-25 ) && ( (p.right-k.right)<=25 && (p.right-k.right)>=-25 ) ) {
    console.log("you have a white card!");
    lock_white.removeAttribute('id');
    lock_white.className="ud_rd";
    keywhite.style.display="none";
    // keyblack.style.display="flex";
    iconWhiteCard.style.display="inline-block";
    accessCard.play();
  }

if (( (p.bottom-b.bottom)<=25 && (p.bottom-b.bottom)>=-25 ) && ( (p.right-b.right)<=25 && (p.right-b.right)>=-25 ) ) {
    console.log("you have a black card!");
    lock_black.removeAttribute('id');
    lock_black.className="ud_rd";
    keyblack.style.display="none";
    iconBlackCard.style.display="inline-block";
    accessCard.play();
  }



// появление подсказки
if (( (p.bottom-sd.bottom)<=25 && (p.bottom-sd.bottom)>=-25 ) && ( (p.right-sd.right)<=25 && (p.right-sd.right)>=-25 ) ) {
    console.log("you have a tab!");
         tab = document.createElement('div');
         tab.className = "tab";
           switch (tempLocation) {
  case 1:
   if (language==1){
    tab.innerHTML= 'Каждый этаж имеет терминал безопасности - там можно получить доступ к следующему этажу...<button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= 'Each floor has a security terminal - there you can access the next floor ...<button onclick="closeTab()">ok</button>' };
    break;
  case 2:
   if (language==1){
    tab.innerHTML= 'Включилась охранная система, охранник мертв, что здесь произошло!!!? Его оружие мне пригодится...<button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= 'The security system is activated, the guard is dead, what happened here !!!? His weapon will be needed...<button onclick="closeTab()">ok</button>' };
    break;
  case 3:
   if (language==1){
    tab.innerHTML= 'Я вижу движение впереди...это не человек!!!<button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= 'I see the movement ahead ... this is not a man !!!<button onclick="closeTab()">ok</button>' };
    break;
  case 4:
   if (language==1){
    tab.innerHTML= 'Я вижу движение впереди...это не человек!!!<button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= 'I see the movement ahead ... this is not a man !!!<button onclick="closeTab()">ok</button>' };
    break;
  case 5:
   tab.innerHTML= 'Try to avoid open portals ...<button onclick="closeTab()">ok</button>' ;
    break;
  case 6:
   tab.innerHTML= 'Find the main server and turn it off ...<button onclick="closeTab()">ok</button>' ;
    break;
  case 7:
   tab.innerHTML= 'Press F11 to go to full window mode ...<button onclick="closeTab()">ok</button>' ;
    break;
  case 8:
   tab.innerHTML= 'Yen and the rest are on the 10th floor...<button onclick="closeTab()">ok</button>' ;
    break;
  case 9:
   tab.innerHTML= 'Use your shotgun first ...<button onclick="closeTab()">ok</button>' ;
    break;
  case 10:
   tab.innerHTML= 'The main boss can restore his health...<button onclick="closeTab()">ok</button>' ;
    break;
  case 11:
   tab.innerHTML= 'You are in the secret area now...<button onclick="closeTab()">ok</button>' ;
    break;
  case 12:
  if (language==1){
    tab.innerHTML= 'Я чувствую что я здесь не один ... кто-то написал эти цифры на столе "6702" ...<button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= 'I feel like Im not alone here ... someone wrote these numbers on the table "6702" ...<button onclick="closeTab()">ok</button>' };
    break;
  case 13:
  if (language==1){
    tab.innerHTML= 'этого места нет на плане здания!...<button onclick="closeTab()">ok</button>' 
  }else
     {tab.innerHTML= 'this place is not on the floor plan!...<button onclick="closeTab()">ok</button>' };
    break;
  default:
   tab.innerHTML= 'Do you see a hidden structure!??<button onclick="closeTab()">ok</button>' ;
}
 
          tab.style.left=figure.style.left;
          tab.style.bottom=figure.style.bottom;
          inTeleportation=1;
          game.append(tab);
          doc.style.display="none";
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

    // setTimeout(closeTab,5000);
  }
   

// отслеживание столкновений с ботом
 if(( (p.bottom-m.bottom)<=50 && (p.bottom-m.bottom)>=-50 ) && ( (p.right-m.right)<=50 && (p.right-m.right)>=-50 ) || ( (p.bottom-m2.bottom)<=50 && (p.bottom-m2.bottom)>=-50 ) && ( (p.right-m2.right)<=50 && (p.right-m2.right)>=-50 )) {
  if(life<0){
  panel.innerHTML="life: "+ life;;
  showMassege();
  setTimeout(exit, 5000);
 
}
else{
  life-=1;
  localStorage.setItem('life', life);
  panel.innerHTML="life: " + life;
  figure.innerHTML="<span>"+life+"</span>";
  monsterAttack.play();

 }
}




// аптечка
if (( (p.bottom-kit.bottom)<=25 && (p.bottom-kit.bottom)>=-25 ) && ( (p.right-kit.right)<=25 && (p.right-kit.right)>=-25 ) ) {
    medicKit.style.display="none";
    life+=200;
    panel.innerHTML="life: " + life;
    figure.innerHTML="<span>"+life+"</span>";
    console.log(life);
    medikKit.play();
    }


    // телепортация player
 if (( (p.bottom-teleport.bottom)<=25 && (p.bottom-teleport.bottom)>=-25 ) && ( (p.right-teleport.right)<=25 && (p.right-teleport.right)>=-25 ) ) {
     inTeleportation=1;
     setTimeout(setImgPlayerTeleportation,10);
     left=left+teleportX;
     bottom=bottom+teleportY;
     figure.style.left = left +'px';
     figure.style.bottom = bottom + 'px';
     setCurrentView();
     console.log("teloportation");
     setTimeout(changePlayerImgInTeleportation,2000);
     portalSound.play();
    }


  

  //  выход из уровня
 if (( (p.bottom-ex.bottom)<=25 && (p.bottom-ex.bottom)>=-25 ) && ( (p.right-ex.right)<=25 && (p.right-ex.right)>=-25 ) ) {
        if(error==0){
        // сохранение статуса жизни игрока при выходе с уровня
        localStorage.setItem('life', life);
        localStorage.setItem('flagPistol', flagPistol);
        localStorage.setItem('flagShootgun', flagShootgun);
        localStorage.setItem('cells', cells);
        localStorage.setItem('sCells', sCells);
        console.log(cells, sCells);
        document.location.href = "elevator.html";
        }
        else{
          console.log("lift is blocked!");
        }

}

// // попадание в бота
// left_cell = document.elementFromPoint((unit.right-5),(unit.bottom-5)).className;
// right_cell  = document.elementFromPoint((unit.right+5),(unit.bottom-5)).className;
// down_cell = document.elementFromPoint((unit.right-5),(unit.bottom+5)).className;
// up_cell = document.elementFromPoint((unit.right-5),(unit.bottom-5)).className;




// if (left_cell=="pistolBullet" && right_cell=="pistolBullet" && down_cell=="pistolBullet" && up_cell=="pistolBullet"){
//   botLife-=25;
//   console.log("monster shootted!");
// }




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



// Выход из уровня
function exit(){
   
        document.location.href = "loader.html";
       

    }



// Вывод сообщения
function showMassege(){

  message=document.getElementById('message');
  message.style.display="block";
  message.innerHTML="<br><br><br><br><br><h1>YOU DIED!</h1><img src='IMG/player_dead.gif'>";
  setTimeout(hideMassege, 5000);
}

// Скрытие сообщения
function hideMassege(){
  
  message=document.getElementById('message');
  message.style.display="none";
}


// Информация о текущем метоположении и уровне жизни
function stat(){
    alert("Life: " + life  
        + "  положение: " + tempLocation+ " этаж");
}

// вывод карты уровня в виде массива для сохранения
function createMap(){
  var mapArr=game.getElementsByTagName('*');
    var l = 0;
  for(i=21;i<=920;i++){
  
      newMap.push('"'+mapArr[i].className+'"');
      l++;
      if(l%30==0){
        newMap.push("],<br>[");
      }
  } 
    newMap.push("]");
 var stringMap = String(newMap);
 console.log(stringMap);

     function showNewMap(){
        message.style.display="block";
        message.style.fontSize="10pt";
        message.innerHTML=stringMap; 
      }
 showNewMap();
}




// сообщение о найденых модулях
function collectModul(e){
  e.style.display="none";
  if(moduls==0){
    panel.innerHTML="Ok!.";
    setTimeout(showLife,2000);
  }
  else{
  panel.innerHTML="it remains to find " + (moduls-1) +" moduls";
  setTimeout(showLife,2000);
  moduls-=1;
    if(moduls==0){
    panel.innerHTML="Alarm disabled.";
    setTimeout(showLife,2000);
    } 
  
}
console.log(moduls);
}



// Вывод уровня жизни в информационную панель
function showLife(){
  panel.innerHTML="life: " + life;
  
}



// Наведение фокуса на игрока при телепортации
function setCurrentView(){
  player.scrollIntoView({block: "center", inline: "center"});

}





// touch interface

function clearLeftInterval(){
  clearInterval(timerLeft);
  flagLeft=0;
  leftInMove=0;
   if(upInMove==1){
      figure.style.backgroundImage='URL("IMG/player_top.gif")'}
      else
       if(downInMove==1){
      figure.style.backgroundImage='URL("IMG/player_down.gif")'}
      else
        if(leftInMove==1){
      figure.style.backgroundImage='URL("IMG/player_l.gif")'}
      else
        if(rightInMove==1){
      figure.style.backgroundImage='URL("IMG/player_r.gif")'}
       else
        {
      figure.style.backgroundImage='URL("IMG/player_l.png")'}
  
}

function clearRightInterval(){
  clearInterval(timerRight);
  flagRight=0;
  rightInMove=0;
   if(upInMove==1){
      figure.style.backgroundImage='URL("IMG/player_top.gif")'}
      else
       if(downInMove==1){
      figure.style.backgroundImage='URL("IMG/player_down.gif")'}
      else
        if(leftInMove==1){
      figure.style.backgroundImage='URL("IMG/player_l.gif")'}
      else
        if(rightInMove==1){
      figure.style.backgroundImage='URL("IMG/player_r.gif")'}
       else
        {
      figure.style.backgroundImage='URL("IMG/player_r.png")'}
  
}

function clearUpInterval(){
  clearInterval(timerUp);
  flagUp=0;
  upInMove=0;
   if(upInMove==1){
      figure.style.backgroundImage='URL("IMG/player_top.gif")'}
      else
       if(downInMove==1){
      figure.style.backgroundImage='URL("IMG/player_down.gif")'}
      else
        if(leftInMove==1){
      figure.style.backgroundImage='URL("IMG/player_l.gif")'}
      else
        if(rightInMove==1){
      figure.style.backgroundImage='URL("IMG/player_r.gif")'}
       else
        {
      figure.style.backgroundImage='URL("IMG/player_l.png")'}
  
}

function clearDownInterval(){
  clearInterval(timerDown);
  flagDown=0;
  downInMove=0;
   if(upInMove==1){
      figure.style.backgroundImage='URL("IMG/player_top.gif")'}
      else
       if(downInMove==1){
      figure.style.backgroundImage='URL("IMG/player_down.gif")'}
      else
        if(leftInMove==1){
      figure.style.backgroundImage='URL("IMG/player_l.gif")'}
      else
        if(rightInMove==1){
      figure.style.backgroundImage='URL("IMG/player_r.gif")'}
       else
        {
      figure.style.backgroundImage='URL("IMG/player_r.png")'}
  
}

wievport.addEventListener('touchstart', handleTouchStart, false);        
wievport.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            if(inTeleportation==0){
              flagRight=0;
              rightInMove=0;
              flagUp=0;
              upInMove=0;
              flagDown=0;
              downInMove=0;
              clearInterval(timerRight);
              clearInterval(timerUp);
              clearInterval(timerDown);
             figure.style.backgroundImage='URL("IMG/player_l.gif")';
             leftInMove=1;
             if(flagLeft==0){
                flagLeft=1;
                timerLeft = setInterval(playerMoveLeft,50);
                setTimeout(clearLeftInterval,500);
                 }
               }
        } else {
            /* right swipe */
            if(inTeleportation==0){
                flagLeft=0;
                leftInMove=0;
                flagUp=0;
                upInMove=0;
                flagDown=0;
                downInMove=0;
                clearInterval(timerLeft);
                clearInterval(timerUp);
                clearInterval(timerDown);
                figure.style.backgroundImage='URL("IMG/player_r.gif")';
                rightInMove=1;
                if(flagRight==0){
                flagRight=1;
                timerRight = setInterval(playerMoveRight,50);
                setTimeout(clearRightInterval,500);
                }

            }
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            if(inTeleportation==0){
            flagRight=0;
            rightInMove=0;
            flagLeft=0;
            leftInMove=0;
            flagDown=0;
            downInMove=0;
            clearInterval(timerDown);
            clearInterval(timerLeft);
            clearInterval(timerRight);
            figure.style.backgroundImage='URL("IMG/player_top.gif")';
            upInMove=1;
            if(flagUp==0){
            flagUp=1;
            timerUp = setInterval(playerMoveUp,50);
            setTimeout(clearUpInterval,500);
            }


            } 
        } else { 
            /* down swipe */
            if(inTeleportation==0){
              flagRight=0;
              rightInMove=0;
              flagLeft=0;
              leftInMove=0;
              flagUp=0;
              upInMove=0;
              clearInterval(timerUp);
              clearInterval(timerLeft);
              clearInterval(timerRight);
             figure.style.backgroundImage='URL("IMG/player_r.gif")';
             downInMove=1;
            if(flagDown==0){
            flagDown=1;
            timerDown = setInterval(playerMoveDown,50);
            setTimeout(clearDownInterval,500);
              }

            }
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};

function closeTab(){
  // setTimeout(function(){doc.style.display="inline-block"},3000);
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
   
}








