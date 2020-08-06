const figureLeftImg = "IMG/player_l.gif";
          preloadImage(figureLeftImg);
const figureRightImg = "IMG/player_r.gif";
          preloadImage(figureRightImg);
const figureTopImg = "IMG/player_top.gif";
          preloadImage(figureTopImg);
const figureDownImg = "IMG/player_down.gif";
          preloadImage(figureDownImg);
const figureHitImg = "IMG/player_hit.gif";
          preloadImage(figureHitImg);
const figureShootImg = "IMG/player_shoot.gif";
          preloadImage(figureShootImg);
const figureStayLeftImg = "IMG/player_l.png";
          preloadImage(figureStayLeftImg);
const figureInTeleportationImg = "IMG/playerTeleportation.gif";
          preloadImage(figureInTeleportationImg);

          
         
          

var playerLeftXDistance=-10;
var playerRightXDistance=10;
var playerUpYDistance=10;
var playerDownYDistance=-10;
var left;
var bottom;
// var pistolBulletLeft;
// var bulletBottom;
var life;
var cells = +localStorage.getItem('cells');
var sCells = +localStorage.getItem('sCells');
var wievport=document.getElementById('wievport');
var steps = new Audio('SOUND/step.mp3');
var pistolShoot = new Audio('SOUND/pistol.mp3');
var shootGunShoot = new Audio('SOUND/shootGun.mp3');
var punch = new Audio('SOUND/punch.mp3');

var timerUp;
var timerDown;
var timerLeft;
var timerRight;

var flagInHit=0;

var flagUp=0;
var flagDown=0;
var flagLeft=0;
var flagRight=0;

var leftInMove=0;
var rightInMove=0;
var upInMove=0;
var downInMove=0;

var pistolBullet;
var pistolBulletLeft;
var leftPistolBulletDistance=0;
var bottomPistolBulletDistance=0;
var inBulletFly=0;

var flagPistol = +localStorage.getItem('flagPistol');
var flagShootgun = +localStorage.getItem('flagShootgun');
var flagSelect=1;


figure=document.getElementById('player');
figure.innerHTML="<span>"+life+"</span>";




 // функции управления игроком
function changePlayerImg(){
  
       if(upInMove==1){
      figure.style.backgroundImage='URL('+ figureTopImg+')'}
      else
       if(downInMove==1){
      figure.style.backgroundImage='URL('+ figureDownImg+')'}
      else
        if(leftInMove==1){
      figure.style.backgroundImage='URL('+ figureLeftImg+')'}
      else
        if(rightInMove==1){
      figure.style.backgroundImage='URL('+ figureRightImg+')'}
       else
        {
      figure.style.backgroundImage='URL('+ figureStayLeftImg+')'}
}

function changePlayerImgThenButtonUp(){
  
       if(flagUp==1){
      figure.style.backgroundImage='URL('+ figureTopImg+')'}
      else
       if(flagDown==1){
      figure.style.backgroundImage='URL('+ figureDownImg+')'}
      else
        if(flagLeft==1){
      figure.style.backgroundImage='URL('+ figureLeftImg+')'}
      else
        if(flagRight==1){
      figure.style.backgroundImage='URL('+ figureRightImg+')'}
       else
        {
      figure.style.backgroundImage='URL('+ figureStayLeftImg+')'}
}


function setImgPlayerTeleportation(){
  figure.style.backgroundImage='URL('+ figureInTeleportationImg +')';
  clearInterval(timerLeft);
  clearInterval(timerRight);
  clearInterval(timerUp);
  clearInterval(timerDown);
  flagLeft=0;
  leftInMove=0;
  flagRight=0;
  rightInMove=0;
  flagDown=0;
  downInMove=0;
  flagUp=0;
  upInMove=0;
}

function changePlayerImgInTeleportation(){
  figure.style.backgroundImage='URL('+ figureStayLeftImg+')';
  inTeleportation=0;
}


 figure.moveLeft=function(distance){
   var p = figure.getBoundingClientRect();
   get_coordinates(p);
    if (leftTemp==1) {
    left=left+distance;
    this.style.left = left +'px';
    wievport.scrollBy(-10, 0);
    steps.play();
    }
}

 figure.moveRight=function(distance){
   var p = figure.getBoundingClientRect();
   get_coordinates(p);
    if (rightTemp==1) {
    left=left+distance;
    this.style.left = left +'px';
    wievport.scrollBy(10, 0);
    steps.play();
    }
}

 figure.moveUp=function(distance){
   var p = figure.getBoundingClientRect();
   get_coordinates(p);
    if (upTemp==1) {
    bottom=bottom+distance;
    this.style.bottom = bottom +'px';
    wievport.scrollBy(0, -10);
    steps.play();
    }
}

 figure.moveDown=function(distance){
   var p = figure.getBoundingClientRect();
   get_coordinates(p);
    if (downTemp==1) {
    bottom=bottom+distance;
    this.style.bottom = bottom +'px';
    wievport.scrollBy(0, 10);
    steps.play();
    }
}

figure.hit=function(){
    if(flagPistol==1 && cells>0 && flagSelect==2){
          playerHitByPistol();
         }
    else   
        
    if(flagShootgun==1 && sCells>0 && flagSelect==3){
          playerHitByShootgun();
         }   
    else{
          playerHitByArms();     
         }
      
   
}

function playerHitByArms(){
      attack=5;
      figure.style.backgroundImage='URL('+ figureHitImg+')';
      punch.play();
      setTimeout(changePlayerImg,300);
      console.log("attack: "+attack);
      requestingForDamage();
    
}

function playerHitByPistol(){
     if(cells>0){
         if(inBulletFly==0){
            inBulletFly=1;
              attack=15;
              cells-=1;
              iconPistol.innerHTML=cells;
              figure.style.backgroundImage='URL('+ figureShootImg+')';
              pistolShoot.play();
              // createPistolBullet();
              setTimeout(changePlayerImg,300);
              console.log("attack: "+attack);
              console.log("cells: "+cells);
              setTimeout(readyToShoot,500);
              requestingForDamage();
            }
        }
    
}

function playerHitByShootgun(){
      if(sCells>0){
          if(inBulletFly==0){
            inBulletFly=1;
             attack=51;
             sCells-=1;
             iconShootgun.innerHTML=sCells;
             figure.style.backgroundImage='URL('+ figureShootImg+')';
             shootGunShoot.play();
             // createPistolBullet();
             setTimeout(changePlayerImg,300);
             console.log("attack: "+attack);
             console.log("cells: "+sCells);
             setTimeout(readyToShoot,1100);
             requestingForDamage();
             }
       }
}

function readyToShoot(){
  inBulletFly=0;
}

function playerMoveLeft(){
  figure.moveLeft(playerLeftXDistance);
}

function playerMoveRight(){
  figure.moveRight(playerRightXDistance);
}

function playerMoveUp(){
  figure.moveUp(playerUpYDistance);
}

function playerMoveDown(){
  figure.moveDown(playerDownYDistance);
}

function playerHit(){
  figure.hit();
}


// обаботчики нажатий на клавиши
window.onkeydown = function(){
    if(inTeleportation==0){

  // left
        if(event.keyCode==65){
          figure.style.backgroundImage='URL('+ figureLeftImg+')';
          leftInMove=1;
          if(flagLeft==0){
     flagLeft=1;

     flagRight=0;
     rightInMove=0;
     flagDown=0;
     downInMove=0;
     flagUp=0;
     upInMove=0;


      // направление выстрела
          // leftPistolBulletDistance=-50;
          // bottomPistolBulletDistance=0;

    try{
      clearInterval(timerRight);
      clearInterval(timerUp);
      clearInterval(timerDown);
    }
    catch{}
     timerLeft = setInterval(playerMoveLeft,50);
      }

}
  // right
    else if(event.keyCode==68){
     figure.style.backgroundImage='URL('+ figureRightImg+')';
      rightInMove=1;
      if(flagRight==0){
      flagRight=1;

      flagLeft=0;
      leftInMove=0;
      flagDown=0;
      downInMove=0;
      flagUp=0;
      upInMove=0;


      // направление выстрела
          // leftPistolBulletDistance=50;
          // bottomPistolBulletDistance=0;

    try{
      clearInterval(timerLeft);
      clearInterval(timerUp);
      clearInterval(timerDown);
    }
    catch{}
      timerRight = setInterval(playerMoveRight,50);
    }
}

   // up
    else if(event.keyCode==87){
    figure.style.backgroundImage='URL('+ figureTopImg+')';
      upInMove=1;
      if(flagUp==0){
      flagUp=1;

      flagRight=0;
      rightInMove=0;
      flagDown=0;
      downInMove=0;
      flagLeft=0;
      leftInMove=0;


      // направление выстрела
          // leftPistolBulletDistance=0;
          // bottomPistolBulletDistance=50;

          try{
      clearInterval(timerDown);
      clearInterval(timerLeft);
      clearInterval(timerRight);
    }
    catch{}

      timerUp = setInterval(playerMoveUp,50);
    }
   
}

   // down
    else if(event.keyCode==83){
    figure.style.backgroundImage='URL('+ figureDownImg+')';
     downInMove=1;
     if(flagDown==0){
      flagDown=1;

      flagRight=0;
      rightInMove=0;
      flagLeft=0;
      leftInMove=0;
      flagUp=0;
      upInMove=0;

      
      // направление выстрела
          // leftPistolBulletDistance=0;
          // bottomPistolBulletDistance=-50;

          try{
      clearInterval(timerUp);
      clearInterval(timerLeft);
      clearInterval(timerRight);
    }
    catch{}

      timerDown = setInterval(playerMoveDown,50);
    }
   
     
}

     // hit
    else if(event.keyCode==190){ 
    
     if (flagInHit==0) {
          flagInHit=1
          playerHit();
          
          
 
            }

    }
    
  // select weapon

  // 1 - arms
    else if(event.keyCode==49){
      selectArmAttack();
    }
  // 2 - pistol
    else if(event.keyCode==50){
      selectPistolAttack();
    }

  // 3 - shootgun
    else if(event.keyCode==51){
     selectShootgunAttack();
    }

  
   }

}

     // обаботчики нажатий на клавиши
window.onkeyup = function(){
    if(inTeleportation==0){ 

  // left
        if(event.keyCode==65){
          flagLeft=0;
          leftInMove=0;
          clearInterval(timerLeft);
       //    if(rightInMove==0 && upInMove==0 && downInMove==0){
       //        figure.style.backgroundImage='URL("IMG/player_l.png")';
       // }
      
        changePlayerImgThenButtonUp();
       
}
  // right
    else if(event.keyCode==68){
          flagRight=0;
          rightInMove=0;
          clearInterval(timerRight);
      //     if(leftInMove==0 && upInMove==0 && downInMove==0){
      //        figure.style.backgroundImage='URL("IMG/player_r.png")';
      // }

      changePlayerImgThenButtonUp();
}
   // down
    else if(event.keyCode==83){
          flagDown=0;
          downInMove=0;
          clearInterval(timerDown);
     //      if(leftInMove==0 && rightInMove==0 && upInMove==0){
     //        figure.style.backgroundImage='URL("IMG/player_r.png")';
     // }

     changePlayerImgThenButtonUp();
}
   // up
    else if(event.keyCode==87){
          flagUp=0;
          upInMove=0;
          clearInterval(timerUp);
     //      if(downInMove==0 && leftInMove==0 && rightInMove==0){
     //        figure.style.backgroundImage='URL("IMG/player_l.png")';
     // }

     changePlayerImgThenButtonUp();
     
}
     // hit
    else if(event.keyCode==190){
      flagInHit=0;
      
   
      
    }

  }

}


// // пуля
// function createPistolBullet(){
//   if(inBulletFly==0){
//   inBulletFly=1;
//   pistolBullet = document.createElement('div');
//   pistolBullet.className = "pistolBullet";
//   var tempStyleleft=figure.style.left;
//   var tempStyleBottom=figure.style.bottom;
//   pistolBullet.style.left=tempStyleleft;
//   pistolBullet.style.bottom=tempStyleBottom;
//   console.log("pistolBullet.style.left: " + pistolBullet.style.left);
//   console.log("figure.style.left: "+figure.style.left);
   
//   pistolBullet.style.transition= " all 0.1s linear";
//   game.append(pistolBullet);

//   flyInterval();
//   deleteFlyInterval();
//   }
// }



// function flyPistolBullet(){
//    pistolBulletLeft=+pistolBullet.style.left.toString().slice(0, -2);
//    pistolBulletBottom=+pistolBullet.style.bottom.toString().slice(0, -2);
//    pistolBullet.style.left = pistolBulletLeft  + leftPistolBulletDistance +'px';
//    pistolBullet.style.bottom = pistolBulletBottom  + bottomPistolBulletDistance +'px';
//    console.log(pistolBulletLeft);
//    console.log(pistolBulletBottom);
  
//  }

// function deleteBullet(){
//    clearInterval(timerBullet);
//    inBulletFly=0;
//    game.removeChild(pistolBullet);
//  }


// function flyInterval(){
//    timerBullet=setInterval(flyPistolBullet,50);
//  }


// function deleteFlyInterval(){
//    setTimeout(deleteBullet,200);
//  }


function selectArmAttack(){
      flagSelect=1;
      console.log("weapon: arms");
      iconPistol.style.border="none";
      iconShootgun.style.border="none";
}

function selectPistolAttack(){
      flagSelect=2;
      console.log("weapon: pistol");
      iconPistol.style.border="1px solid red";
      iconShootgun.style.border="none";
}

function selectShootgunAttack(){
      flagSelect=3;
      console.log("weapon: shootgun");
      iconPistol.style.border="none";
      iconShootgun.style.border="1px solid red";
}


function sensorPlayerAttack(){
 
     if (flagInHit==0) {
          flagInHit=1
          playerHit();
          
          
            }
       flagInHit=0;
            
}


function requestingForDamage(){
     var p = figure.getBoundingClientRect();
     var m = enemy.getBoundingClientRect();
     var m2 = enemy2.getBoundingClientRect();
    
     
          if (( (p.bottom-m.bottom)<=75 && (p.bottom-m.bottom)>=-75 ) && ( (p.right-m.right)<=75 && (p.right-m.right)>=-75 ) ) {
                  botLife-=attack;
                    }
          if (( (p.bottom-m2.bottom)<=75 && (p.bottom-m2.bottom)>=-75 ) && ( (p.right-m2.right)<=75 && (p.right-m2.right)>=-75 ) ) {
                  botLife2-=attack;
                    }
                    try{
                       var bossm2 = bossenemy2.getBoundingClientRect();
                        if (( (p.bottom-bossm2.bottom)<=75 && (p.bottom-bossm2.bottom)>=-75 ) && ( (p.right-bossm2.right)<=75 && (p.right-bossm2.right)>=-75 ) ) {
                          BossbotLife2-=attack;
                          }
                    }
                    catch{}
          


            }
      


function preloadImage(url) {
     const img = new Image(); 
     img.src = url; } 


    








