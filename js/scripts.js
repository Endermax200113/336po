//Нужный скрипт

var docWidth = window.innerWidth;
var docHeight = window.innerHeight;
var deviceSmall = docWidth < 320;
var deviceMobile = docWidth <= 480 && docWidth >= 320;
var deviceTablet = docWidth <= 768 && docWidth > 480;
var deviceLaptop = docWidth <= 1200 && docWidth > 768;
var deviceComp = docWidth <= 1920 && docWidth > 1200;
var device2K = docWidth <= 2560 && docWidth > 1920;
var device4K = docWidth <= 4096 && docWidth > 2560;
var deviceBig = docWidth > 4096;

$(document).ready(() => {
	$(window).on("resize", () => {
		docWidth = window.innerWidth;
		docHeight = window.innerHeight;
		
		deviceMobile = docWidth <= 480 && docWidth >= 320;
		deviceTablet = docWidth <= 768 && docWidth > 480;
		deviceLaptop = docWidth <= 1200 && docWidth > 768;
		deviceComp = docWidth <= 1920 && docWidth > 1200;
		device2K = docWidth <= 2560 && docWidth > 1920;
		device4K = docWidth <= 4096 && docWidth > 2560;
		deviceBig = docWidth > 4096;
	});
});

function testFunction() {
	alert("Функция успешно работает!");
}


//Построение страницы

$(window).ready(() => {
	
});

function addHtml(selecter, html) {
	return $(selecter).html($(selecter).html() + html);
}
//Главный скрипт

var version = "0.0.0";

$(document).ready(() => {
	console.log("Версия сайта: " + version);
	console.info("Сайт только для группы 336-ПО");
});