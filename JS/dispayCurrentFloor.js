var floor1 = document.getElementById('floor1');
var floor2 = document.getElementById('floor2');
var floor3 = document.getElementById('floor3');
var floor4 = document.getElementById('floor4');
var floor5 = document.getElementById('floor5');
var floor6 = document.getElementById('floor6');
var floor7 = document.getElementById('floor7');
var floor8 = document.getElementById('floor8');
var floor9 = document.getElementById('floor9');
var floor10 = document.getElementById('floor10');

var lock1=localStorage.getItem('lock1');
var lock2=localStorage.getItem('lock2');
var lock3=localStorage.getItem('lock3');
var lock4=localStorage.getItem('lock4');
var lock5=localStorage.getItem('lock5');
var lock6=localStorage.getItem('lock6');
var lock7=localStorage.getItem('lock7');
var lock8=localStorage.getItem('lock8');
var lock9=localStorage.getItem('lock9');
var lock10=localStorage.getItem('lock10');


var currentFloorPanel = document.getElementById('currentFloorPanel');
var enterAccessCodePanel = document.getElementById('enterAccessCodePanel');

function displayCurrentFloor(e){
	var tempCurrentFloor=e.id.toString().slice(5);
	console.log(localStorage.getItem('lock'+tempCurrentFloor));
	console.log(tempCurrentFloor);
    switch(tempCurrentFloor){
    	case "1":
    	  if(lock1==0){
          currentFloorPanel.innerHTML="underground storage";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="underground storage";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "2":
          if(lock2==0){     
          currentFloorPanel.innerHTML="work-area";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="work-area";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "3":
          if(lock3==0){     
          currentFloorPanel.innerHTML="offices";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="offices";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "4":
          if(lock4==0){
          currentFloorPanel.innerHTML="insulator &nbsp rooms";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="insulator &nbsp rooms";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "5":
          if(lock5==0){
          currentFloorPanel.innerHTML="research &nbsp post";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="research &nbsp post";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "6":
          if(lock6==0){
          currentFloorPanel.innerHTML="logical &nbsp center";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="logical &nbsp center";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "7":
          if(lock7==0){
          currentFloorPanel.innerHTML="management &nbsp rooms";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="management &nbsp rooms";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "8":
          if(lock8==0){
          currentFloorPanel.innerHTML="radiophysics &nbsp laboratory";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="radiophysics &nbsp laboratory";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "9":
          if(lock9==0){
          currentFloorPanel.innerHTML="main &nbsp server";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="main &nbsp server";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;

    case "10":
          if(lock10==0){
          currentFloorPanel.innerHTML="lounge &nbsp area";
          currentFloorPanel.style.color="green";
          enterAccessCodePanel.innerHTML="unlocked";
          enterAccessCodePanel.style.color="green";
          }
          else{
          currentFloorPanel.innerHTML="lounge &nbsp area";
          currentFloorPanel.style.color="red";
          enterAccessCodePanel.innerHTML="locked";
          enterAccessCodePanel.style.color="red";
          }
    break;
    }

}

function goTo1floor(){
	if(lock1==0){
document.location="room1.html";
   }
}

function goTo2floor(){
	if(lock2==0){
document.location="room2.html";
   }
}

function goTo3floor(){
	if(lock3==0){
document.location="room3.html";
   }
}

function goTo4floor(){
	if(lock4==0){
document.location="room4.html";
   }
}

function goTo5floor(){
	if(lock5==0){
document.location="room5.html";
   }
}

function goTo6floor(){
	if(lock6==0){
document.location="room6.html";
   }
}

function goTo7floor(){
	if(lock7==0){
document.location="room7.html";
   }
}

function goTo8floor(){
	if(lock8==0){
document.location="room8.html";
   }
}

function goTo9floor(){
	if(lock9==0){
document.location="room9.html";
   }
}

function goTo10floor(){
	if(lock10==0){
document.location="room10.html";
   }
}




function displayActiveFloor(){
   if(lock1==0){
       floor1.style.color="green";
   }
   if(lock2==0){
       floor2.style.color="green";
   }
   if(lock3==0){
       floor3.style.color="green";
   }
   if(lock4==0){
       floor4.style.color="green";
   }
   if(lock5==0){
       floor5.style.color="green";
   }
   if(lock6==0){
       floor6.style.color="green";
   }
   if(lock7==0){
       floor7.style.color="green";
   }
   if(lock8==0){
       floor8.style.color="green";
   }
   if(lock9==0){
       floor9.style.color="green";
   }
   if(lock10==0){
       floor10.style.color="green";
   }
 }

displayActiveFloor();

