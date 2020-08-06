      var map =[
           ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
           ["w","wp","o","o","o","o","o","o","o","o","o","o","o","o","o","op","o","o","o","o","o","o","o","o","o","w","ow","o","o","w"],
           ["w","o","o","o","w","o","wc","o","w","o","o","w","w","w","w","w","w","w","w","w","o","o","o","w","w","w","w","o","o","w"],
           ["w","o","o","o","w","o","wc","o","w","w","w","w","o","o","wp","w","wp","o","o","w","w","w","w","w","o","o","o","ow","ow","w"],
           ["w","w","w","ud","w","o","wc","o","w","o","o","o","o","o","o","w","o","o","o","o","o","o","wp","w","wc","o","w","wc","o","w"],
           ["w","o","o","o","w","o","o","o","w","wp","o","o","o","o","o","w","wp","o","o","o","o","o","o","w","o","o","w","wc","o","w"],
           ["w","o","wp","o","w","w","w","w","w","w","w","ud","w","w","w","w","w","w","ud","w","w","w","w","w","w","o","w","o","o","w"],
           ["w","o","o","o","w","o","o","op","o","o","o","o","o","o","o","op","o","o","o","o","o","o","o","o","w","o","w","o","wc","w"],
           ["w","w","ud","w","w","w","ud","w","w","w","w","ud","w","w","w","w","w","w","ud","w","w","w","o","o","w","o","w","o","o","w"],
           ["w","o","o","op","w","o","o","o","o","o","o","o","o","o","w","o","op","o","o","o","o","w","o","wc","w","o","w","o","o","w"],
           ["w","wc","wc","op","w","o","o","o","o","w","w","w","o","o","w","o","w","w","w","o","o","w","o","o","w","o","w","w","w","w"],
           ["w","o","o","op","w","o","o","o","o","w","o","w","o","o","w","o","w","o","w","o","o","w","o","o","w","o","w","o","op","w"],
           ["w","o","o","w","w","w","w","ud","w","w","ow","w","w","w","w","w","w","ow","w","w","w","w","wc","o","w","o","w","o","op","w"],
           ["w","o","o","op","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","w","o","o","w","o","w","ud","w","w"],
           ["w","w","w","w","w","w","w","w","w","o","o","o","o","o","o","o","w","w","w","w","o","w","o","o","w","o","o","o","o","w"],
           ["w","o","o","op","o","o","o","o","w","o","o","o","o","o","o","o","ws","o","o","w","o","w","w","ud","w","o","w","wc","o","w"],
           ["w","o","w","w","w","w","w","o","w","o","o","o","o","o","o","o","w","w","w","w","o","w","o","o","w","o","o","o","o","w"],
           ["w","o","o","w","o","o","w","o","ud","o","o","o","o","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","wc","w"],
           ["w","o","wc","w","o","o","w","o","w","w","w","w","w","o","o","w","w","w","w","w","w","w","ud","w","w","w","w","w","w","w"],
           ["w","o","wc","w","o","o","w","o","o","o","o","wp","w","o","o","w","wp","o","o","o","wp","w","o","o","o","o","o","o","op","w"],
           ["w","o","o","w","o","o","w","o","o","o","o","o","w","o","o","w","o","o","o","o","o","w","w","w","w","w","w","ud","w","w"],
           ["w","o","o","w","o","o","w","wp","o","o","o","wp","w","o","o","w","wp","o","o","o","o","o","o","o","o","o","w","o","o","w"],
           ["w","w","w","w","o","w","w","w","w","ud","w","w","w","o","o","w","w","w","ud","w","w","w","w","w","w","o","w","o","o","w"],
           ["w","o","op","w","o","o","o","o","o","o","o","o","op","o","o","op","o","o","o","o","o","op","o","o","w","o","w","o","o","w"],
           ["w","wc","op","w","o","o","wc","o","o","o","o","o","op","o","o","op","o","o","o","o","o","op","o","wc","w","o","w","o","o","w"],
           ["w","o","op","w","o","o","w","w","w","ud","w","w","w","o","o","w","w","w","ud","w","w","op","wc","wc","w","o","o","o","o","w"],
           ["w","wc","op","w","o","o","o","o","w","o","o","wp","w","ud","w","w","o","o","o","w","o","op","o","o","w","w","w","w","w","w"],
           ["w","wc","op","w","w","w","w","ud","w","o","o","o","w","ow","ow","w","o","wc","o","w","ud","w","w","w","w","wp","o","o","wp","w"],
           ["w","o","op","o","o","o","o","o","w","o","o","o","w","ow","ow","w","o","o","o","o","o","o","o","o","o","o","o","o","o","w"],
           ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
         ];
   
   var teleportX = 0;
   var teleportY = 500;
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

