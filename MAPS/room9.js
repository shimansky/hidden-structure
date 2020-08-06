var map =[
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
["w","wp","oa","oa","op","w","oa","w","oa","wp","w","oa","oa","op","oa","ud","oa","oa","op","wp","w","o","o","op","o","op","o","o","o","w",],
["w","se","o","o","w","w","o","op","o","se","w","o","o","op","oa","w","o","o","op","se","w","o","wc","wc","o","wc","o","o","wc","w",],
["w","wp","o","o","op","ud","oa","op","o","wp","w","oa","o","w","oa","w","oa","o","w","oa","w","o","wc","o","o","wc","wc","o","o","w",],
["w","w","w","ud","w","w","w","ud","w","w","w","w","ud","w","w","w","w","ud","w","w","w","w","w","o","o","w","w","w","w","w",],
["w","o","o","o","op","o","w","o","o","op","o","w","o","o","op","o","w","o","o","o","w","o","ud","o","o","ud","o","o","o","w",],
["w","se","wp","o","op","o","w","o","wp","op","o","w","o","o","op","o","w","o","o","o","o","o","w","o","o","w","o","o","o","w",],
["w","w","w","w","w","ud","w","w","w","w","ud","w","w","w","w","ud","w","w","w","w","w","w","w","o","o","w","w","w","w","w",],
["w","oa","wp","w","o","o","oa","w","wp","op","o","oa","w","oa","w","o","oa","w","o","o","o","w","o","o","o","w","o","op","o","w",],
["w","oa","oa","op","o","o","wp","w","se","op","o","o","ud","o","op","o","o","w","wc","o","wc","w","o","o","o","w","o","wc","wc","w",],
["w","oa","oa","w","wp","oa","oa","w","oa","w","oa","oa","w","oa","op","wp","oa","w","wc","o","wc","w","o","o","o","w","o","o","o","w",],
["w","w","ud","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","o","wc","w","ud","w","w","w","w","o","o","w",],
["w","o","o","o","o","op","o","o","o","o","o","o","o","o","o","op","o","w","wc","o","o","w","o","w","o","o","ws","o","o","w",],
["w","o","o","o","o","op","o","o","w","w","ud","w","w","o","o","op","o","ud","o","o","o","w","o","w","o","o","w","o","o","w",],
["w","w","w","w","w","w","w","w","w","ow","ow","ow","w","w","w","w","w","w","w","w","w","w","ud","w","w","w","w","o","o","w",],
["we","we","we","we","we","we","we","we","w","w","ow","w","w","we","we","we","we","w","o","ud","o","o","o","o","o","w","o","o","o","w",],
["we","we","we","we","we","we","we","we","we","w","ud","w","we","we","we","we","we","w","o","w","o","o","o","o","o","w","o","o","o","w",],
["w","w","w","w","w","we","w","w","w","w","op","w","w","w","w","we","we","w","o","w","w","w","w","ud","w","w","o","o","o","w",],
["w","o","o","oa","w","we","w","vw","vw","w","op","w","vw","vw","w","we","we","w","o","w","o","op","o","o","o","w","o","o","o","w",],
["w","o","oa","oa","w","we","w","vw","w","w","ws","w","w","vw","w","we","w","w","o","w","o","op","o","o","o","w","o","o","o","w",],
["w","o","w","w","w","we","w","vw","w","chain","chain","chain","w","vw","w","we","w","o","o","w","o","op","o","o","o","w","o","o","o","w",],
["w","o","w","we","we","we","w","vw","w","chain","chain","chain","w","vw","w","we","w","o","o","w","w","w","w","w","w","w","o","o","o","w",],
["w","o","w","w","we","we","w","vw","w","o","o","o","w","vw","w","we","w","w","o","o","wc","o","o","wc","wc","o","o","o","o","w",],
["w","o","o","w","we","we","w","vw","w","w","w","w","w","vw","w","we","we","w","o","o","op","o","wc","wc","o","o","wc","o","wc","w",],
["w","o","o","w","we","we","w","vw","vw","vw","vw","vw","vw","vw","w","we","we","w","o","wc","wc","o","o","wc","wc","o","wc","o","o","w",],
["w","o","o","w","we","we","w","w","w","w","w","w","w","w","w","we","we","w","wc","wc","wc","wc","o","o","wc","o","wc","wc","wc","w",],
["w","o","o","w","w","we","we","we","we","we","we","we","we","we","we","we","we","w","o","op","o","o","o","o","wc","o","op","o","o","w",],
["w","o","o","o","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","wc","o","wc","wc","o","wc","wc","wc","o","wc","w",],
["w","o","o","o","o","op","o","o","o","o","op","o","o","o","o","op","o","o","o","wc","o","wc","o","o","o","o","o","o","o","w",],
["w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w",],
];
var teleportX = 0;
   var teleportY = 150;
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

 