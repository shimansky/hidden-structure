var map =[
["w","w","w","w","w","w","w","w","w","we","we","we","we","we","we","we","we","we","we","we","w","w","w","w","w","w","w","w","w","w",],
["w","o","o","o","o","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","o","o","op","o","o","o","o","w",],
["w","ud","w","w","w","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","o","o","op","o","o","o","o","w",],
["w","o","o","o","w","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","w","w","w","ud","w","w","w",],
["w","o","o","wc","w","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","o","o","w","o","o","op","w",],
["w","w","w","w","w","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","wc","o","w","wc","o","op","w",],
["w","op","wc","o","w","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","wc","o","ud","o","o","wc","w",],
["w","op","o","o","w","o","ud","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","o","o","w","o","o","op","w",],
["w","w","w","ud","w","w","w","ud","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","w","w","w","ud","w","w","w",],
["w","o","o","o","w","o","o","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","o","o","w","o","o","o","w",],
["w","ud","w","w","w","w","w","ud","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","o","o","ud","o","wc","o","w",],
["w","o","o","o","o","o","o","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","w","o","o","w","o","o","o","w",],
["w","w","w","w","ud","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","o","w","w","w","w","ud","w","w","w",],
["w","o","o","w","o","w","o","o","w","ow","o","w","o","o","o","o","o","o","o","ow","w","o","o","op","o","o","o","o","o","w",],
["w","wc","o","w","o","w","o","wc","w","ow","o","w","w","w","w","ud","w","w","oa","ow","w","w","w","w","w","w","ud","w","ud","w",],
["w","wc","o","w","o","w","o","o","ud","ow","o","w","o","o","o","o","o","w","o","ow","ud","o","o","o","o","w","o","op","o","w",],
["w","o","o","w","ud","w","o","o","w","ow","o","w","w","ud","w","w","w","w","o","ow","w","w","w","w","o","w","ud","w","ud","w",],
["w","o","o","op","o","op","o","o","w","ow","o","o","o","o","o","o","o","w","o","ow","w","op","o","w","o","w","o","op","o","w",],
["w","ud","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","w","op","wc","w","o","w","ud","w","ud","w",],
["w","o","o","w","o","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","op","o","w","o","w","o","ud","o","w",],
["w","o","o","w","o","wc","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","wc","o","w","o","w","o","w","o","w",],
["w","wc","o","ud","o","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","wc","o","w","o","w","o","w","o","w",],
["w","o","o","w","o","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","o","w","o","w","o","w","o","w",],
["w","o","wc","w","wc","o","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","o","w","o","w","o","w","o","w",],
["w","o","o","w","w","w","w","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","o","w","o","ud","o","w","o","w",],
["w","o","o","o","o","o","op","o","w","we","we","we","we","we","we","we","we","we","we","we","w","w","ud","w","o","w","o","w","o","w",],
["w","w","ud","w","w","w","w","w","w","we","we","we","we","we","we","we","we","we","we","we","w","o","o","w","o","w","o","w","o","w",],
["w","op","o","o","o","o","wc","o","w","we","we","we","we","we","we","we","we","we","we","we","w","ud","w","w","o","w","o","w","o","w",],
["w","op","o","wc","wc","o","o","o","w","we","we","we","we","we","we","we","we","we","we","we","w","o","o","o","o","w","o","ud","o","w",],
["w","w","w","w","w","w","w","w","w","we","we","we","we","we","we","we","we","we","we","we","w","w","w","w","w","w","w","w","w","w"]
];
var teleportX = 0;
   var teleportY = 400;
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

