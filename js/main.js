// Скрипт для раскрытия меню на мобилках
$(document).ready(function() {
	var pull = $('#navigation-toggle');
	var nav = $('#mobile-nav');
	pull.on('click', function(event) {
		event.preventDefault();
		nav.slideToggle("slow");
		// Добавляем модификатор active
		$(this).toggleClass('navigation__toggle-button--active');
	});
	// При изменении размеров окна
	$(window).resize(function(event) {
		var w = $(window).width();
		// Если ширина окна больше 640 и меню скрыто, то у меню убираем аттрибут style
		if (w > 640 && nav.is(':hidden')) {
			nav.removeAttr('style');
		}
	});
	
	// При переходе по якорю скрывает меню
	var w = $(window).width();
	if (w < 992) {
		$('nav.navigation a').on('click', function(event) {
			nav.slideToggle("slow");
		});
	}

	// Вызов слайдера
	$('#top-slider').owlCarousel({
		singleItem: true,
		navigation: true,
		theme: "top-slider-theme",
		navigationText: ["",""],
		slideSpeed: 600
	});

	// slide to id
	$("#mobile-nav, .scroll-to-top").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.scroll-to-top').on('click', function(event) {
    	event.preventDefault();
    	var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});