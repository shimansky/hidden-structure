      var map =[
           ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
           ["w","o","op","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","op","o","o","o","w"],
           ["w","o","o","o","o","o","o","w","w","ud","w","w","w","w","w","w","w","w","w","o","o","o","w","w","w","w","w","w","o","w"],
           ["w","w","w","w","w","o","op","w","o","o","o","o","w","o","o","o","o","o","w","o","o","o","w","ow","ow","ow","ow","w","o","w"],
           ["w","o","o","o","w","w","w","w","o","w","w","w","w","o","wp","o","wp","o","w","o","o","o","w","ow","ow","ow","ow","w","o","w"],
           ["w","o","o","o","w","op","o","w","o","w","o","op","w","o","o","o","op","o","w","o","o","o","w","ow","ow","ow","ow","w","op","w"],
           ["w","o","w","w","w","o","o","w","o","o","o","o","w","o","wp","o","wp","o","ws","o","o","o","w","w","w","o","w","w","o","w"],
           ["w","ud","w","op","ow","o","o","w","w","ud","w","w","w","o","o","o","o","o","w","o","o","o","o","op","w","o","o","w","o","w"],
           ["w","o","o","o","ow","w","o","w","o","o","o","op","w","o","o","w","ow","w","w","o","w","w","w","o","w","o","o","w","o","w"],
           ["w","o","wc","o","ow","op","o","w","o","wc","o","o","w","o","o","w","ud","w","op","o","o","o","o","o","w","op","o","w","o","w"],
           ["w","op","wc","o","ow","w","o","w","o","wc","wc","o","w","w","w","w","o","w","o","o","o","o","w","w","w","w","o","w","o","w"],
           ["w","o","o","o","ow","o","o","w","op","wc","wc","o","w","op","o","o","o","w","op","o","o","o","w","wp","o","wp","o","o","o","w"],
           ["w","wc","o","o","ow","w","o","w","o","o","wc","o","w","o","o","w","w","w","o","w","w","o","w","op","o","o","o","w","o","w"],
           ["w","o","op","o","ow","o","o","o","o","o","o","o","w","o","op","w","o","op","o","o","w","o","w","wp","o","wp","op","w","o","w"],
           ["w","o","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","w","o","w","o","w","w","w","w","w","w","o","w"],
           ["w","o","w","op","o","o","w","op","o","o","o","o","o","o","o","w","op","o","o","o","w","o","o","o","o","o","o","op","o","w"],
           ["w","o","w","wc","wc","o","w","o","w","w","w","w","w","w","o","w","o","w","w","w","w","o","o","o","o","op","o","o","o","w"],
           ["w","o","w","wc","o","o","w","o","w","o","o","o","o","w","o","w","op","o","o","o","o","o","o","o","w","ud","w","w","o","w"],
           ["w","o","ud","o","o","o","w","op","w","o","o","o","o","ud","op","w","w","w","w","w","w","w","o","o","w","o","op","w","o","w"],
           ["w","o","w","o","o","o","w","o","w","w","w","w","w","w","w","w","o","o","op","o","o","w","op","o","w","wc","o","w","o","w"],
           ["w","o","w","w","w","w","w","o","ud","ow","op","oa","oa","oa","ow","ud","o","o","o","w","o","w","o","o","w","wc","o","w","o","w"],
           ["w","o","w","o","o","o","w","o","w","w","w","w","w","w","w","w","o","w","o","o","o","w","o","o","w","wc","o","w","o","w"],
           ["w","o","ud","op","wc","wc","w","o","w","o","w","wc","o","w","o","w","o","o","o","o","o","w","op","o","w","op","o","w","o","w"],
           ["w","o","w","o","o","wc","w","o","w","o","o","o","o","o","o","w","w","w","w","w","ud","w","o","o","w","wc","o","w","o","w"],
           ["w","o","w","o","o","op","w","o","w","o","o","o","o","o","o","wc","wc","o","o","o","o","w","o","o","w","wc","o","w","op","w"],
           ["w","o","w","w","w","w","w","o","w","o","o","wp","o","wp","o","o","o","o","o","o","o","w","o","o","w","o","op","w","o","w"],
           ["w","o","o","o","o","o","o","op","w","wc","o","o","o","o","o","wp","o","wp","o","wp","o","w","o","o","w","w","w","w","o","w"],
           ["w","o","w","w","o","o","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","o","o","o","o","o","w"],
           ["w","o","o","op","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","w"],
           ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
         ];
   
   var teleportX = 400;
   var teleportY = -50;
   var moduls = 5;

   var isVisited = localStorage.getItem('level'+ tempLocation);
   console.log("level is visited: " + isVisited);

   if(isVisited==1){
    monster.style.display="none";
    monster2.style.display="none";
    monsterPortal.style.display="none";
    controlPanel.style.backgroundImage='URL("IMG/controlPanelOFF.jpg")';
   
        try{
            off();
            turelActive=0;
            bullet.style.display="none";
            toggle=0;
            
            }
        catch{

            }
            
   }
   else{
      // alert("Find all the alarm-modules, otherwise you will die from nerve gas. you have 150 seconds!");
   }