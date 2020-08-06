var a =1;

var docs=document.getElementsByClassName('scientist');

for(i=0; i<docs.length; i++){
  docs[i].docSay=function(){
  this.innerHTML=words[Math.floor(Math.random() * (10 - 0)) + 0];
  
   }
}

var accessCodes=[0xff,0xfe,0x100,0x8707,0x22d,0x3a4,0x2ca,0x1be,0x229,0x22,0x163a];

function docAnswer1(e){
  if(a==1){
  docWords.push(accessCodes[0]);
  a = 0;
  }
  e.innerHTML=docWords[0];
}

function docAnswer2(e){
 if(a==1){
  docWords.push(accessCodes[1]);
  a = 0;
  }
  e.innerHTML=docWords[1];
}

function docAnswer3(e){
  if(a==1){
  docWords.push(accessCodes[2]);
  a = 0;
  }
  e.innerHTML=docWords[2];
}

function docAnswer4(e){
  if(a==1){
  docWords.push(accessCodes[3]);
  a = 0;
  }
  e.innerHTML=docWords[3];
}

function docAnswer5(e){
  if(a==1){
  docWords.push(accessCodes[4]);
  a = 0;
  }
  e.innerHTML=docWords[4];
}

function docAnswer6(e){
 if(a==1){
  docWords.push(accessCodes[5]);
  a = 0;
  }
  e.innerHTML=docWords[5];
}

function docAnswer7(e){
  if(a==1){
  docWords.push(accessCodes[6]);
  a = 0;
  }
  e.innerHTML=docWords[6];
}

function docAnswer8(e){
 if(a==1){
  docWords.push(accessCodes[7]);
  a = 0;
  }
  e.innerHTML=docWords[7];
}

function docAnswer9(e){
 if(a==1){
  docWords.push(accessCodes[8]);
  a = 0;
  }
  e.innerHTML=docWords[8];
}

function docAnswer10(e){
  if(a==1){
  docWords.push(accessCodes[9]);
  a = 0;
  }
  e.innerHTML=docWords[9];
}

var words = ["sd card", "sd card", "sd card", "sd card", "sd card", "sd card", "sd card", "sd card", "sd card","sd card"];

var docWords = ["12qw", "rgf5", "rt4c", "mjk87", "cmf9", "xkd9", "djnc8", "sckf8", "fck0","345cf"];
