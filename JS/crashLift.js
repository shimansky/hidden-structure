var lift = document.getElementById("exit_door");
var error;

function destoyLift(){
	lift.style.backgroundImage='URL("IMG/liftDestroed.gif")';
	error=1;
}

function checkLifStatus(){
	if(error==0){
		lift.style.backgroundImage='URL("IMG/Exitdoor.jpg")';
	}
}

setTimeout(destoyLift,2000);

setInterval(checkLifStatus,100);

