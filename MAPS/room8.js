var map =[
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","o","o","o","ud","ow","o","o","o","o","o","w","o","o","o","o","o","o","op","w","op","o","w","o","ud","o","o","o","o","w",],
["w","wc","wc","o","w","o","wc","wc","wc","o","ow","ud","ow","o","wc","wc","wc","o","w","w","w","o","w","o","w","w","ud","w","o","w",],
["w","o","o","o","w","o","wc","o","o","o","o","w","o","wc","wc","wc","o","o","o","o","o","o","w","o","w","o","o","w","o","w",],
["w","o","wc","wc","w","o","wc","wc","wc","o","o","w","o","w","w","w","w","w","wc","o","o","ow","w","o","w","wc","o","ud","o","w",],
["w","o","ow","o","w","o","o","o","o","o","o","w","w","w","o","o","o","w","w","w","w","ud","w","o","w","wc","o","w","o","w",],
["w","w","ud","w","w","w","w","w","w","w","w","w","o","op","oa","oa","oa","op","o","o","o","o","w","ud","w","w","w","w","o","w",],
["w","o","ow","o","w","o","o","o","o","o","o","w","w","w","w","oa","w","w","w","w","o","o","ud","o","ud","o","o","o","o","w",],
["w","wc","o","wc","w","o","wc","wc","wc","o","o","ud","o","o","w","o","w","o","o","w","w","w","w","ud","w","w","w","o","o","w",],
["w","o","o","ow","ud","ow","wc","wc","wc","o","o","w","o","o","w","w","w","oa","o","o","o","o","w","o","o","o","w","w","w","w",],
["w","o","wc","o","w","o","o","o","o","o","o","w","o","o","op","o","op","o","o","o","o","o","w","o","o","o","ud","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","w","ud","w","w","w","w","w","w","o","o","w","w","w","w","w","o","o","w",],
["w","o","wc","op","wc","op","o","o","o","o","o","o","w","o","w","o","o","o","o","w","o","wc","w","o","o","o","w","o","wc","w",],
["w","o","o","op","o","op","o","wc","o","o","o","o","w","o","w","wp","o","o","wp","w","o","o","w","o","o","o","ud","o","o","w",],
["w","w","ud","w","w","w","w","w","w","w","o","wc","w","o","w","o","o","o","o","w","o","o","w","ow","ow","w","w","o","wc","w",],
["w","o","o","op","o","op","o","o","o","w","o","o","w","o","w","wp","o","o","wp","w","o","wc","w","o","o","o","w","o","wc","w",],
["w","o","o","op","o","op","o","o","o","w","o","o","w","op","w","w","w","o","o","w","o","o","w","o","wc","wc","w","o","o","w",],
["w","o","w","w","w","w","w","ow","o","w","wc","o","w","o","w","o","o","o","o","w","w","o","w","o","o","o","w","o","o","w",],
["w","o","w","gr","gr","gr","w","ow","o","w","o","o","w","o","w","wp","o","o","o","o","ud","o","w","o","wc","o","w","w","w","w",],
["w","o","w","gr","gr","gr","ud","ow","o","w","o","o","w","o","w","o","o","o","o","o","ud","o","w","wc","wc","o","ud","o","o","w",],
["w","o","w","gr","gr","gr","w","ow","o","w","o","o","w","o","w","wp","o","o","o","w","w","o","w","o","o","o","w","o","o","w",],
["w","o","w","w","w","w","w","ow","o","w","o","o","w","op","w","w","w","o","o","w","o","o","w","w","w","w","w","o","o","w",],
["w","o","o","op","o","op","o","o","o","w","o","o","w","o","w","o","o","o","o","w","o","o","w","o","o","o","ud","o","o","w",],
["w","o","w","w","w","w","w","ow","o","w","o","o","w","o","w","wp","o","o","wp","w","o","o","w","ud","w","w","w","w","ud","w",],
["w","o","w","gr","gr","gr","w","ow","o","w","o","wc","w","o","w","w","w","w","w","w","o","o","w","o","o","o","w","o","ow","w",],
["w","o","w","gr","gr","gr","ud","ow","o","w","o","o","w","o","o","o","o","o","o","o","o","o","w","o","o","o","w","o","o","w",],
["w","o","w","gr","gr","gr","w","ow","o","w","o","wc","w","w","w","w","w","w","w","w","w","w","w","w","ud","w","w","o","o","w",],
["w","o","w","w","w","w","w","ow","o","w","o","o","oa","o","o","o","o","wc","wc","o","o","o","o","o","ow","o","o","o","wc","w",],
["w","o","o","op","o","op","o","o","o","w","o","o","wc","o","o","o","o","o","o","o","wc","wc","o","o","wc","o","o","wc","wc","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
];
var teleportX = 550;
   var teleportY = -200;
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

