$(document).ready(function () {

	if ($(window).width() < 769) {
		$('.main__link').click(function (e) {

			e.preventDefault();
			var url = $(this).attr('data-link');
			$(this).css('height', '70vh');
			$('.main__link').not($(this)).css('height', '30vh');
			var id = $(this).attr('data-index');


			setInterval(function () {
				$('#' + id)[0].click();
				// $($(this).attr('data-index')).click();
			}, 400);
		});
	}

});