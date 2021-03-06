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

	AOS.init();


	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const video = document.querySelector('.video-youtube');

	let unlock = true;

	// timeout - время анимации в css
	const timeout = 880;

	if (popupLinks.length > 0) {
		for (let index = 0; index < popupLinks.length; index++) {
			const popupLink = popupLinks[index];
			popupLink.addEventListener("click", function (e) {
				const popupName = popupLink.getAttribute('href').replace('#', '');
				const currentPopup = document.getElementById(popupName);
				popupOpen(currentPopup);
				e.preventDefault();
			});
		}
	}

	const popupCloseIcon = document.querySelectorAll('.close-popup');
	if (popupCloseIcon.length > 0) {
		for (let index = 0; index < popupCloseIcon.length; index++) {
			const el = popupCloseIcon[index];
			el.addEventListener('click', function (e) {
				popupClose(el.closest('.popup'));
				e.preventDefault();
			});
		}
	}

	function popupOpen(currentPopup) {
		if (currentPopup && unlock) {
			const popupActive = document.querySelector('.popup.open');
			if (popupActive) {
				popupClose(popupActive, false);
			} else {
				// bodyLock();
			}
			currentPopup.classList.add('open');
			currentPopup.addEventListener('click', function (e) {
				if (!e.target.closest('.popup__content')) {
					popupClose(e.target.closest('.popup'));
				}
			});
		}
	}

	function popupClose(popupActive, doUnlock = true) {
		if (unlock) {
			if (popupActive.classList.contains('popup-video')) {
				video.setAttribute('src', '');
				video.setAttribute('src', 'https://www.youtube.com/embed/QiqMIK-iz2I');
			}
			popupActive.classList.remove('open');

			// if (doUnlock) {
			// 	bodyUnlock();
			// }
		}
	}


	// function bodyLock() {
	// 	// const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	// 	// if (lockPadding.length > 0) {
	// 	// 	for (let index = 0; index < lockPadding.length; index++) {
	// 	// 		const el = lockPadding[index];
	// 	// 		el.style.paddingRight = lockPaddingValue;
	// 	// 	}
	// 	// }
	// 	// body.style.paddingRight = lockPaddingValue;
	// 	// body.classList.add('_lock');

	// 	unlock = false;
	// 	unlock = true;
	// 	// setTimeout(function () {
	// 	// 	unlock = true;
	// 	// }, timeout);
	// }

	// function bodyUnlock() {
	// 	// setTimeout(function () {
	// 	// 	for (let index = 0; index < lockPadding.length; index++) {
	// 	// 		const el = lockPadding[index];
	// 	// 		el.style.paddingRight = '0px';
	// 	// 	}
	// 	// 	body.style.paddingRight = '0px';
	// 	// 	// body.classList.remove('_lock');
	// 	// }, timeout);

	// 	unlock = false;
	// 	unlock = true;
	// 	// setTimeout(function () {
	// 	// 	unlock = true;
	// 	// }, timeout);
	// }

	document.addEventListener('keydown', function (e) {
		if (e.which === 27) {
			const popupActive = document.querySelector('.popup.open');
			popupClose(popupActive);
		}
	});

	(function () {
		// проверяем поддержку
		if (!Element.prototype.closest) {
			// реализуем
			Element.prototype.closest = function (css) {
				var node = this;
				while (node) {
					if (node.matches(css)) return node;
					else node = node.parentElement;
				}
				return null;
			};
		}
	})();
	(function () {
		// проверяем поддержку
		if (!Element.prototype.matches) {
			// определяем свойства
			Element.prototype.matches = Element.prototype.matchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector;
		}
	})();

	let rateVar = $('.scale-rate__var');
	let rateVar3 = $('.scale-rate__var--3');
	let rateVar6 = $('.scale-rate__var--6');
	let rateVar9 = $('.scale-rate__var--9');
	let rateVar12 = $('.scale-rate__var--12');
	let rateBall = $('.scale-rate__ball');
	let rateLine = $('.scale-rate__line');
	let rateSum = $('.card-rate__sum');
	let rateMonth = $('.card-rate__month');

	// rateVar3.click(function () {
	// 	rateVar.removeClass('_active');
	// 	rateVar3.addClass('_active');

	// 	rateBall.css('left', '0');
	// 	rateLine.css('width', '0');
	// 	rateSum.html('2970₽');
	// 	rateMonth.html('3');
	// });

	// rateVar6.click(function () {
	// 	rateVar.removeClass('_active');
	// 	rateVar6.addClass('_active');

	// 	rateBall.css('left', '33%');
	// 	rateLine.css('width', '34%');
	// 	rateSum.html('5940₽');
	// 	rateMonth.html('6');

	// });

	// rateVar9.click(function () {
	// 	rateVar.removeClass('_active');
	// 	rateVar9.addClass('_active');

	// 	rateBall.css('left', '64%');
	// 	rateLine.css('width', '65%');
	// 	rateSum.html('8910₽');
	// 	rateMonth.html('9');
	// });

	// rateVar12.click(function () {
	// 	rateVar.removeClass('_active');
	// 	rateVar12.addClass('_active');

	// 	rateBall.css('left', '98%');
	// 	rateLine.css('width', '99%');
	// 	rateSum.html('12880₽');
	// 	rateMonth.html('12');
	// });



	$('.card-rate__hide-block').hide();

	$('.card-rate__btn-start').click(function () {
		$('.card-rate__hide-block').slideDown();
		$('.card-rate__first-sum').hide();
		$('.card-rate__btn-start').html('К оплате');
	});

	var currentValue = 3;
	function changeSum(month) {
		if (month == 3) {
			rateSum.html('2970₽');
		}
		if (month == 6) {
			rateSum.html('5940₽');
		}
		if (month == 9) {
			rateSum.html('8910₽');
		}
		if (month == 12) {
			rateSum.html('12880₽');
		}
	}

	$(".js-range-slider").ionRangeSlider({
		skin: 'big',
		min: 3,
		max: 12,
		from: 3,
		to: 12,
		grid: false,
		step: 3,
		onChange: function (data) {
			var value = data.from;


			if (value >= currentValue) {
				$(`.scale-rate__var--${value}`).addClass('_active');
				rateMonth.html(value);
				changeSum(value);
				currentValue = value;

			}

			if (value < currentValue) {
				$(`.scale-rate__var--${currentValue}`).removeClass('_active');
				rateMonth.html(value);
				changeSum(value);
				currentValue = value;
			}
		}
	});
});