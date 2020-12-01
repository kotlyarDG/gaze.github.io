// Проверка, загрузилась ли страница
$(document).ready(function () {

	$('.header-radar__burger').click(function (event) {
		$('.header-radar__burger,.header-radar__menu').toggleClass('_active')
	});

});