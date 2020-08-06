// таймер окончания уровня

var t=151; /* Даём 150 секунд +1 */
function refr_time()
{
  if (t>0)
  {
    t--;
     document.getElementById('timer').innerHTML=t;
       if(moduls==0 ){
            clearInterval(tm);
            document.getElementById('timer').style.display="none";
          }
  }
   else
  { 
    showMassege();
    clearInterval(tm); 
    setTimeout(exit, 5000); 
  }
}
var tm=setInterval('refr_time();',1000);


