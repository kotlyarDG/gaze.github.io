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

});