$(document).ready(function () {

	var menuCard = $('.cards-wallet__menu-item');
	var itemsCard = $('.item-card');
	var idItem = $('.cards-wallet__menu-item._active').attr('data-index');

	$('.item-card').fadeOut(400);
	setTimeout(function () { $(`#item-card-${idItem}`).fadeIn(400); }, 400);

	menuCard.click(function () {
		itemsCard.fadeOut(400);
		idItem = $(this).attr('data-index');
		setTimeout(function () { $(`#item-card-${idItem}`).fadeIn(400); }, 400);
		$(this).addClass('_active');
		menuCard.not($(this)).removeClass('_active');
	});

});