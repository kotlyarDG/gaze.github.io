$(document).ready(function () {

	if ($(window).width() < 769) {
		$('.main__link').click(function (e) {

			e.preventDefault();
			var url = $(this).attr('data-link');
			$(this).css('height', '70vh');
			$('.main__link').not($(this)).css('height', '30vh');

			setInterval(function () {
				window.location = url;

			}, 400);
		});
	}

});