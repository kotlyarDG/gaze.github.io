// Проверка, загрузилась ли страница
$(document).ready(function () {

	$('.header-radar__burger').click(function (event) {
		$('.header-radar__burger,.header-radar__menu').toggleClass('_active')
	});

	$('.business-radar__slider').slick({
		dots: true,
	});

	$('.item-case').fadeOut(400);
	setTimeout(function () { $(`#item-case-1`).fadeIn(400); }, 400);


	$('.menu-cases__item').click(function () {
		$('.item-case').fadeOut(400);
		var idItem = $(this).attr('data-index');
		setTimeout(function () { $(`#item-case-${idItem}`).fadeIn(400); }, 400);
		$(this).addClass('_active');
		$('.menu-cases__item').not($(this)).removeClass('_active');
	});

	var sections = $('.anchor-section');
	var navItem = $('.menu__item');
	var navHeight = $('.menu').outerHeight();
	var nav = $('.menu');

	$(document).on('click', '.menu__item', function (e) {
		e.preventDefault();
		if ($(window).width() < 991) {
			$('.header-radar__burger,.header-radar__menu').toggleClass('_active');
		}
		var linkID = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(linkID).offset().top
		}, 'slow');
	});



	$(window).on('scroll', function () {
		var curPos = $(this).scrollTop();

		if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
			navItem.removeClass('_active');
			sections.removeClass('_active');
			$('#footer-radar').addClass('_active');
			nav.find('a[href="#footer-radar"]').addClass('_active');
		}

		sections.each(function () {
			var top = $(this).offset().top - navHeight;
			var bottom = top + $(this).outerHeight();

			if (curPos >= top && curPos <= bottom) {
				navItem.removeClass('_active');
				sections.removeClass('_active');

				$(this).addClass('_active');
				nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('_active');
			}
		});
	});


});