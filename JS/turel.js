var turel=document.getElementById('turel');

var bullet=document.getElementById('bullet');

var bulletDistance=+bullet.style.left.toString().slice(0, -2);

var turelActive=1;

var bulletEndDistance = bulletDistance + 500;

turel.disable=function(){
	this.style.backgroundImage='URL("IMG/TurelDisable.gif")';
}


bullet.fly=function(lenght){
	var p = figure.getBoundingClientRect();
	var b = bullet.getBoundingClientRect();
	
    bulletDistance = bulletDistance + lenght;
    this.style.left = bulletDistance + 'px';
     if ((p.right==b.right&& (p.bottom-b.bottom)<=50 && (p.bottom-b.bottom)>=-50 ) || (p.bottom==b.bottom&& (p.right-b.right)<=50 && (p.right-b.right)>=-50 ) ) {
           if(life<0){
                 panel.innerHTML="life: 0";
                 showMassege();
                 setTimeout(exit, 5000);
                }
            else{
                 life-=10;
                 panel.innerHTML="life:" + life;
                 figure.innerHTML="<span>"+life+"</span>";
          }
     }
}



function turelFire(){
	if(turelActive==1){
		if(bulletDistance<bulletEndDistance){
		bullet.fly(10);
	    }
	    else{
	    	bulletDistance-=500;
	    	// bullet.fly(10)
	    }
	}

}

var off=function turelOff(){
	turel.disable();
}

 timerTurel=setInterval(turelFire,20);


