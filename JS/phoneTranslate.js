var language = localStorage.getItem('lang');

var lisaSMSrus ="<div class='dateTimeSMS'>Пятница 16.21 P.M Lisa</div><br>Роберт!  Что происходит, где ты!??? Я просто ждала тебя в пиццерии и вдруг стало так тихо и погас свет. Здесь так темно и никого нет !!!<br>";

var mySMSrus = "<div class='dateTimeSMS'>Пятница 16.25 P.M I am:</div><br>Лиса, я уже приехал, но тебя нет...здесь вобще  никого нет! Ты в порядке, где ты!???<br>";

if (language==1){
	document.getElementById('li').innerHTML=lisaSMSrus;
	document.getElementById('im').innerHTML=mySMSrus;
}






function translateToRus(){
	try{
		document.getElementById('indexMenu').innerHTML=sceneryIntroRus;
		localStorage.setItem('lang', 1);
	}
	catch{

	}
}

function translateToEng(){
	try{
		document.getElementById('indexMenu').innerHTML=sceneryIntroEng;
		localStorage.setItem('lang', 0);
	}
	catch{

	}
}










