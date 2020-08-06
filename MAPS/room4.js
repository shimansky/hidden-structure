var map =[
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","o","w",],
["w","o","w","w","w","w","w","op","o","w","w","w","w","w","op","o","w","w","w","w","w","op","o","w","w","w","w","w","o","w",],
["w","o","w","wc","o","wc","w","op","o","w","o","wc","o","w","op","o","w","o","o","o","w","op","o","w","o","o","wc","w","o","w",],
["w","o","w","o","o","o","w","op","o","w","o","o","o","w","op","o","w","wc","o","wc","w","op","o","w","wc","o","wc","w","o","w",],
["w","o","w","o","o","wc","w","op","o","w","wc","o","o","w","op","o","w","wc","o","o","w","op","o","w","o","o","wc","w","o","w",],
["w","o","w","o","o","o","w","op","o","w","o","o","wc","w","op","o","w","o","o","o","w","op","o","w","o","o","o","w","o","w",],
["w","o","w","ow","ow","ow","w","op","o","w","ow","ow","ow","w","op","o","w","ow","ow","ow","w","op","o","w","ow","ow","ow","w","o","w",],
["w","o","w","w","ud","w","w","op","o","w","w","ws","w","w","op","o","w","w","ws","w","w","op","o","w","w","ud","w","w","o","w",],
["w","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","o","w",],
["w","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","o","w",],
["w","w","ud","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","w",],
["w","o","o","w","w","w","w","w","w","ud","w","w","w","w","w","w","w","w","w","w","ud","w","w","w","w","w","w","o","o","w",],
["w","o","o","w","o","o","o","o","o","o","w","o","w","wp","w","wp","w","wp","o","w","o","o","o","o","o","o","w","o","o","w",],
["w","o","o","w","o","wp","w","wp","w","o","w","o","o","o","o","o","o","o","o","w","o","w","wp","w","wp","o","w","o","o","w",],
["w","o","o","w","w","w","w","w","w","w","w","ud","w","w","w","w","w","w","ud","w","w","w","w","w","w","w","w","w","w","w",],
["w","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","w","o","o","o","o","o","o","o","o","o","o","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","ud","ud","w","w","w","w","w","w","w","w","w","w","w","ud","ud","w",],
["w","o","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","w",],
["w","o","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","w",],
["w","o","w","w","ud","w","w","o","op","w","w","ud","w","w","o","op","w","w","ud","w","w","o","op","w","w","ud","w","w","o","w",],
["w","o","w","ow","ow","ow","w","o","op","w","ow","ow","ow","w","o","op","w","ow","ow","ow","w","o","op","w","ow","ow","ow","w","o","w",],
["w","o","w","o","o","o","w","o","op","w","o","o","wc","w","o","op","w","o","o","o","w","o","op","w","wc","o","o","w","o","w",],
["w","o","w","o","wc","o","w","o","op","w","wc","o","o","w","o","op","w","o","wc","wc","w","o","op","w","o","o","wc","w","o","w",],
["w","o","w","o","o","o","w","o","op","w","o","o","o","w","o","op","w","o","o","o","w","o","op","w","o","o","o","w","o","w",],
["w","o","w","o","wc","o","w","o","op","w","o","o","wc","w","o","op","w","o","wc","o","w","o","op","w","wc","o","wc","w","o","w",],
["w","o","w","w","w","w","w","o","op","w","w","w","w","w","o","op","w","w","w","w","w","o","op","w","w","w","w","w","o","w",],
["w","o","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","op","o","o","o","o","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",]
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


