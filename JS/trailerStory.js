var languege = localStorage.getItem('lang');
var story = document.getElementById("story");
var skipStory = document.getElementById("skipStory");

var intro = new Audio('SOUND/intro.mp3');

var aSlideRus = "Шоссе почти пустое, и я могу ехать так быстро как может моя машина, Лиса уже заждалась наверное...";
var aSlideEng = "The highway is almost empty, and I can go as fast as my car can, Lisa was already waiting for sure ...";

var bSlideRus = "Я почти доехал до пиццерии, где она меня ждет. Внезапно двигатель просто выключился и погасли фары, стало быстро темнеть из динамиков машины раздался сильный треск!";
var bSlideEng = "I almost reached the pizzeria where she was waiting for me. Suddenly, the engine simply turned off and the headlights went out, it began to quickly darken from the car speakers there was a strong crack!";

var cSlideRus = "Я выскочил из машины, вокруг была тишина. Шоссе проходило через лес к зданию Orbita technology, где работала Лиса и в той стороне возникла яркая вспышка света, которая сразу погасла. Вдруг запустился двигатель и включились фары!";
var cSlideEng = "I jumped out of the car, there was silence around. The highway passed through the forest to the Orbita technology building, where the Lisa was working, and in that direction there was a bright flash of light that immediately went out. Suddenly the engine started and the headlights turned on!";

var dSlideRus = "Я выжимал из двигателя, все что мог, в голове была только мысль - Лиса! Что там случилось!??? Когда, я доехал меня встретила тишина и никого вокруг, ни одного человека, только пустая пиццерия...";
var dSlideEng = "I squeezed out of the engine, all that I could, in my head was only a thought - Lisa! What happened there!??? When I arrived I was met by silence and no one around, not a single person, only an empty pizzeria ...";

var startRus = "<button id='startButton' onClick='startStory()'>старт</button>";
var startEng = "<button id='startButton' onClick='startStory()'>start</button>";

var skip = "<button id='skipButton' onClick='goToUrl()'>>>></button>";



function translateTrailerButton(){
	if(languege==1){
        story.innerHTML=startRus;
        skipStory.innerHTML=skip;
	}
	else{
		story.innerHTML=startEng;
		skipStory.innerHTML=skip;
	}
}

function translateA(){
	if(languege==1){
        story.innerHTML=aSlideRus;
	}
	else{
		story.innerHTML=aSlideEng;
	}
}

function translateB(){
	if(languege==1){
        story.innerHTML=bSlideRus;
	}
	else{
		story.innerHTML=bSlideEng;
	}
}

function translateC(){
	if(languege==1){
        story.innerHTML=cSlideRus;
	}
	else{
		story.innerHTML=cSlideEng;
	}
}

function translateD(){
	if(languege==1){
        story.innerHTML=dSlideRus;
	}
	else{
		story.innerHTML=dSlideEng;
	}
}

function goToUrl(){
	document.location.href = "room12.html";
}


function startStory(){
intro.play();
timerA = setTimeout(translateA, 0);
timerB = setTimeout(translateB, 10000);
timerC = setTimeout(translateC, 22000);
timerD = setTimeout(translateD, 32000);
timerGo = setTimeout(goToUrl, 50000);
}

translateTrailerButton();


