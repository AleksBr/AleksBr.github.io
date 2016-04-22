$(document).ready(function() {
	$('.slider__list').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear',
	  adaptiveHeight: false,
	  cursorheight: '20px',
	});


//////
$(function () {
    var tabContainers = $('div.tabs__block > div.tabs__content'); // получаем массив контейнеров
    tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
    // далее обрабатывается клик по вкладке
    $('div.tabs__block ul.tabs__list a').click(function () {
        tabContainers.hide(); // прячем все табы
        tabContainers.filter(this.hash).show(); // показываем содержимое текущего
        $('div.tabs__block ul.tabs__list a').removeClass('selected'); // у всех убираем класс 'selected'
        $(this).addClass('selected'); // текушей вкладке добавляем класс 'selected'
        return false;
    }).filter(':first').click();
});
//////

});

