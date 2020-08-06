var sceneryIntroRus = '<button onclick="translateToEng()">eng</button><br>version: 3.00 sensor (4.08.2020) Это бета версия игры! <br><br>управление: <br>"W / свайп вверх" - вверх<br>"A / свайп влево" - влево<br>"S / свайп вниз" - вниз<br>"D / свайп вправо" - вправо<br>". / касание" - aтака<br><br>выбор оружия:<br>"1 / автоматически" - удар<br>"2 / коснутся иконки оружия" - пистолет<br>"3 / коснутся иконки оружия" - дробовик<br><div class="downArrow"></div><br><a href="trailer.html">play</a><br><br><br>Все пожелания и коментарии отправляйте сюда:<br><a href="mailto: shima3d@gmail.com">shima3d@gmail.com</a><br>'

var sceneryIntroEng = '<button onclick="translateToRus()">rus</button><br>version: 3.00 sensor (4.08.2020) This is a beta test version of the game! <br><br>controls: <br>"W / swipe up" - forward<br>"A / swipe left" - left<br>"S / swipe down" - down<br>"D / swipe right" - right<br>". / touch" - attack<br><br>select weapon:<br>"1 / touch icon" - punch<br>"2 / touch icon" - pistol<br>"3 / touch icon" - shootgun<br><div class="downArrow"></div><br><a href="trailer.html">play</a><br><br><br>All wishes and comments can be sent here:<br><a href="mailto: shima3d@gmail.com">shima3d@gmail.com</a><br>'

var lisaSMSeng ="Сегодня я забыл дома карту доступа для моей новой работы, <br>Чтобы не забыть, я написал на ней пароль «PIZZA» с маркером ...";

var lisaSMSrus ="... ты знаешь, мы разрабатываем программное обеспечение для систем телепортации. На днях что-то случилось с нашим главным сервером, кажется он сошел с ума: вместо того, чтобы перемещать объекты, он просто начал открывать порталы в хаотичном порядке. В какой-то момент мне показалось, что-то попало сюда из этого портала, и это было явно не человек ...Теперь этажи закрыты, а персонал эвакуирован. Меня и нескольких других экспертов попросили остаться, чтобы восстановить сервер. Что-то здесь не так ... Мне нужна твоя помощь. Возьми мою белую карту доступа и иди в пиццерию рядом с нами - там есть запасной вход. <br>"; 

var mySMSeng = "Хорошо, держись, я скоро буду!";

var mySMSrus = "Хорошо, держись, я скоро буду!";

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










