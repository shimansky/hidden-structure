var map =[
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","we","we","we","we","w","w","w","w","w","w","w","w","w","w","w",],
["w","o","o","o","o","o","o","op","o","o","o","w","o","o","w","we","we","we","we","w","o","o","w","o","w","o","w","o","o","w",],
["w","ud","w","w","w","w","w","w","w","w","w","w","o","o","w","we","we","we","we","w","o","o","w","ow","ow","ow","w","o","o","w",],
["w","o","o","o","w","o","o","o","o","o","o","op","o","o","w","we","we","we","we","w","o","o","w","o","o","o","w","o","o","w",],
["w","w","w","ud","w","w","w","ud","w","w","w","w","w","w","w","we","we","we","we","w","o","o","o","o","o","o","o","o","o","w",],
["w","o","o","o","o","o","w","o","o","o","o","o","o","o","w","we","we","we","we","w","o","o","o","o","o","o","o","o","o","w",],
["w","ud","w","w","w","ud","w","w","w","w","w","ud","w","w","w","we","we","we","we","w","w","w","w","w","w","ud","w","w","w","w",],
["w","o","o","o","w","o","o","op","o","o","o","o","o","o","w","we","we","we","we","w","o","o","o","o","o","o","o","w","o","w",],
["w","w","w","o","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","w","w","w","w","w","w","o","w",],
["w","o","w","o","w","o","o","o","wc","wc","w","o","ud","ow","ow","ow","ud","o","o","o","o","o","w","w","o","o","w","w","o","w",],
["w","o","w","o","ud","o","wc","o","o","o","w","o","w","w","w","w","w","w","ud","w","w","o","ud","o","o","o","o","ud","o","w",],
["w","o","o","o","w","w","w","w","w","w","w","o","w","we","we","we","we","w","o","o","w","o","w","w","o","o","w","w","o","w",],
["w","w","ud","w","w","o","ud","o","o","o","ud","o","w","we","we","we","we","w","w","w","w","w","w","w","w","w","w","w","o","w",],
["w","op","o","w","o","o","w","o","wc","o","w","o","w","we","we","we","we","we","we","we","w","wp","o","wp","o","wp","o","o","o","w",],
["w","op","o","w","o","o","w","w","w","w","w","w","w","we","we","we","we","we","we","we","w","o","o","o","o","o","o","o","o","w",],
["w","op","w","w","w","o","o","o","o","o","w","o","w","we","we","we","we","we","we","we","w","w","w","w","ud","w","w","w","ud","w",],
["w","op","w","o","w","w","w","w","w","o","w","o","w","w","w","w","w","we","we","we","we","we","w","o","o","o","w","o","o","w",],
["w","op","w","o","o","op","o","o","w","o","w","o","w","o","wc","wc","w","we","we","we","we","we","w","wc","o","wp","w","o","o","w",],
["w","op","w","w","w","w","w","ud","w","o","w","o","w","o","o","wc","w","we","we","we","we","we","w","w","ud","w","w","ud","w","w",],
["w","op","o","o","o","o","o","o","o","o","w","o","ud","o","o","o","w","w","w","w","w","we","w","o","o","o","w","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","w","o","w","w","w","w","w","wp","o","op","w","we","w","o","o","wp","w","o","o","w",],
["w","op","o","o","o","ud","o","o","o","o","o","o","ud","ow","ow","ow","ud","o","o","op","w","w","w","ud","w","w","w","w","ud","w",],
["w","w","ud","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","op","o","o","w","o","op","o","w","o","o","w",],
["w","op","o","w","op","o","o","w","o","o","op","w","we","we","we","we","we","w","o","wc","o","o","ud","o","op","o","w","o","o","w",],
["w","op","o","w","wc","wc","o","w","o","wc","op","w","we","we","we","we","we","w","ud","w","w","w","w","w","w","ud","w","ud","w","w",],
["w","op","o","w","op","o","o","ud","o","o","op","w","we","we","we","we","we","w","o","w","wc","o","wc","w","o","o","w","o","o","w",],
["w","wc","o","w","op","o","wc","w","o","o","wc","w","we","we","we","we","we","w","o","w","o","o","o","w","wc","o","w","o","o","w",],
["w","wc","o","w","w","ud","w","w","w","ud","w","w","we","we","we","we","we","w","o","w","w","ud","w","w","w","w","w","o","wc","w",],
["w","op","o","o","o","o","o","w","o","o","o","w","we","we","we","we","we","w","o","op","o","o","o","o","o","o","ud","o","wc","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","we","we","we","we","we","w","w","w","w","w","w","w","w","w","w","w","w","w"]
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

 