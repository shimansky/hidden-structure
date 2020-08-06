var map =[
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","ow","ow","ow","ow","o","o","o","ud","o","op","o","o","ud","o","o","o","ow","o","o","op","o","o","o","o","op","ow","o","o","w",],
["w","ow","wc","wc","ow","w","w","w","w","o","op","o","o","w","w","w","o","ow","wc","wc","op","wc","wc","wc","wc","op","ow","o","o","w",],
["w","ow","wc","wc","ow","w","o","o","w","o","op","o","o","w","o","w","o","ow","o","o","op","o","o","o","o","op","ow","o","o","w",],
["w","ow","ow","ow","ow","w","o","o","w","w","w","w","w","w","o","w","w","w","w","w","w","w","w","w","w","w","w","w","ud","w",],
["w","ud","w","w","ud","w","o","o","o","o","o","o","o","o","o","o","o","op","o","o","op","o","o","o","o","o","o","w","o","w",],
["w","o","w","o","o","w","o","o","w","w","w","w","w","w","o","w","w","w","w","w","w","w","w","w","w","w","o","w","o","w",],
["w","o","w","o","w","w","o","o","ud","o","o","o","wp","w","o","w","wp","o","o","o","o","o","w","o","wp","w","o","w","o","w",],
["w","o","w","o","w","ow","ow","ow","w","o","o","o","o","w","o","w","o","o","o","w","w","o","w","o","o","w","o","w","o","w",],
["w","o","w","o","w","wc","o","w","w","o","o","o","w","w","ud","w","w","o","o","o","w","o","w","o","o","w","o","w","o","w",],
["w","o","w","o","w","wc","o","w","o","o","w","w","w","o","o","o","w","w","w","w","w","ud","w","w","ud","w","o","w","o","w",],
["w","o","w","o","w","wc","o","w","o","o","w","o","o","o","o","o","ud","o","op","o","op","o","o","o","o","w","o","w","o","w",],
["w","o","w","o","w","ow","ow","w","w","w","w","w","w","o","o","o","w","w","w","w","w","ud","w","w","ud","w","o","w","o","w",],
["w","o","w","o","w","o","o","o","w","o","o","o","w","w","ud","w","w","o","o","o","w","o","w","ow","ow","w","o","w","o","w",],
["w","o","w","o","w","w","w","w","w","o","o","o","o","w","o","w","o","o","o","o","w","o","w","o","o","w","o","w","o","w",],
["w","o","w","o","w","wp","o","o","w","wp","o","o","o","w","o","w","o","o","o","wp","w","o","w","o","wc","w","o","w","o","w",],
["w","o","w","o","w","o","o","o","w","w","ud","w","w","w","o","w","w","w","ud","w","w","o","w","w","w","w","o","w","o","w",],
["w","o","w","o","w","w","ud","w","w","o","o","o","op","o","o","o","op","o","o","o","w","o","w","o","o","o","o","w","o","w",],
["w","o","w","o","o","w","o","o","w","o","o","w","w","w","o","w","w","w","ud","w","w","o","w","wp","o","o","o","w","o","w",],
["w","o","w","o","o","w","o","o","w","o","o","ud","o","w","o","w","o","o","o","o","w","o","w","o","o","o","wp","w","o","w",],
["w","o","w","o","w","w","w","ud","w","w","w","w","o","w","o","w","o","o","w","w","w","o","w","w","ud","w","w","w","o","w",],
["w","o","w","o","w","o","o","o","w","o","o","o","o","w","o","ud","o","o","w","o","w","o","o","w","o","w","o","o","o","w",],
["w","o","w","o","w","o","o","wp","w","o","o","w","w","w","w","w","w","w","w","o","w","w","w","w","o","w","o","o","o","w",],
["w","o","w","o","w","ud","w","w","w","o","o","w","o","o","o","w","o","o","w","o","o","o","o","o","o","w","o","o","o","w",],
["w","o","w","o","w","o","o","op","o","o","o","w","o","o","o","w","o","o","w","w","ud","w","w","w","w","w","o","wc","wc","w",],
["w","o","w","o","w","w","w","w","w","w","w","w","o","o","o","w","o","o","o","w","o","w","o","o","o","ud","o","wc","o","w",],
["w","o","w","o","w","ow","o","o","o","o","ow","ud","o","o","o","w","ud","w","o","ud","o","w","o","o","o","w","o","wc","o","w",],
["w","o","w","o","w","ow","o","o","o","o","ow","w","o","o","o","w","o","w","w","w","w","w","ud","w","w","w","o","wc","o","w",],
["w","o","w","o","ud","ow","wc","wc","o","o","ow","w","o","o","o","w","o","op","o","o","o","op","o","o","o","o","o","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
];
var teleportX = -200;
   var teleportY = 0;
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

