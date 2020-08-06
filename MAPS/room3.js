var map =[
        ["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"],
["w","o","o","o","o","o","o","o","o","op","o","o","o","o","w","o","o","o","op","o","o","o","o","op","o","o","o","o","o","w"],
["w","wc","wc","o","o","w","w","w","w","w","w","o","o","o","w","w","w","w","w","w","w","o","o","op","o","o","o","o","o","w"],
["w","wc","wc","o","o","w","o","o","o","op","w","ud","w","w","w","o","wc","wc","op","o","w","ud","w","w","w","w","w","o","o","w"],
["w","o","o","o","o","w","wp","o","o","w","w","o","o","o","w","o","o","wc","op","o","o","o","w","op","wc","o","w","o","o","w"],
["w","w","ud","w","w","w","w","w","o","w","o","o","w","ud","w","o","o","o","op","o","o","o","w","op","o","o","w","o","o","w"],
["w","o","o","o","o","o","o","w","o","w","w","w","w","o","w","w","w","o","w","w","w","w","w","op","o","wp","w","o","o","w"],
["w","o","w","o","w","w","o","w","o","op","o","o","w","ud","w","o","w","o","op","o","w","o","o","op","o","o","w","o","o","w"],
["w","o","w","o","o","o","o","w","o","op","o","o","o","o","o","o","w","o","op","o","w","wc","o","w","w","w","w","o","o","w"],
["w","o","w","o","o","w","w","w","o","op","w","w","o","o","o","wc","w","o","w","w","w","o","o","o","w","o","o","o","wc","w"],
["w","o","o","o","o","w","o","o","o","op","o","o","o","o","o","wc","w","o","o","o","w","wp","o","o","w","w","w","o","o","w"],
["w","o","o","o","o","w","wp","o","o","op","o","wc","o","wc","o","o","w","o","o","o","w","o","o","o","ud","o","ud","o","o","w"],
["w","w","ud","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","o","w","w","w","w","w","w","w","o","o","w"],
["w","o","o","o","w","o","o","o","ow","w","o","wc","o","o","w","o","o","o","o","o","w","ow","o","o","o","o","w","o","o","w"],
["w","o","o","o","w","o","o","o","ow","ud","o","o","o","o","ud","o","o","o","o","o","ud","ow","o","wc","o","o","ud","o","o","w"],
["w","o","o","o","ud","o","o","o","ow","w","o","wc","o","o","w","o","o","o","o","o","w","ow","o","wc","o","o","w","o","o","w"],
["w","o","o","o","w","o","o","w","w","w","w","w","w","w","w","w","ud","w","w","w","w","w","w","w","w","w","w","o","o","w"],
["w","o","o","o","w","o","o","w","o","o","wp","w","o","o","w","ow","ow","ow","w","o","o","wp","w","o","o","w","o","o","o","w"],
["w","w","ud","w","w","w","w","w","o","o","o","ud","o","o","w","o","o","o","w","o","o","o","w","w","ud","w","o","o","o","w"],
["w","o","o","o","o","w","o","op","o","w","w","w","w","w","w","o","o","o","w","o","wc","o","op","o","o","w","o","o","o","w"],
["w","wc","o","o","wc","w","wc","op","o","o","o","o","o","o","w","o","o","o","w","w","w","o","op","o","wc","w","ud","w","w","w"],
["w","wc","o","o","wc","w","wc","op","o","w","w","w","o","o","w","o","wc","o","o","o","w","o","op","o","o","w","o","o","o","w"],
["w","o","o","o","o","w","o","op","o","o","o","w","o","o","w","wc","wc","o","o","o","w","w","w","w","ud","w","o","o","wc","w"],
["w","o","o","w","w","w","w","w","o","o","wp","w","o","o","w","o","o","o","o","o","o","w","wc","o","o","w","o","o","wc","w"],
["w","o","o","w","o","o","o","ud","o","w","w","w","o","o","w","w","w","w","o","o","w","w","w","o","o","w","o","o","wc","w"],
["w","o","o","w","o","o","o","w","o","o","o","o","o","o","ud","o","o","ud","o","o","ud","o","ud","o","wp","w","o","o","o","w"],
["w","o","o","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","w","w","w","w","w","w","w","w","ud","w"],
["w","o","o","w","o","o","wc","op","o","o","wc","o","o","o","o","o","ow","w","o","o","w","ow","op","o","o","op","o","o","o","w"],
["w","o","o","ud","o","o","o","op","wc","o","o","o","o","o","o","o","ow","ud","o","o","ud","ow","op","o","o","op","o","o","o","w"],
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w"]
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
 