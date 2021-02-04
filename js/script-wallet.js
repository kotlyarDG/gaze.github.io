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
				bodyLock();
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
			popupActive.classList.remove('open');
			video.setAttribute('src', '');
			if (doUnlock) {
				bodyUnlock();
			}
		}
	}


	function bodyLock() {
		// const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

		// if (lockPadding.length > 0) {
		// 	for (let index = 0; index < lockPadding.length; index++) {
		// 		const el = lockPadding[index];
		// 		el.style.paddingRight = lockPaddingValue;
		// 	}
		// }
		// body.style.paddingRight = lockPaddingValue;
		// body.classList.add('_lock');

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

	function bodyUnlock() {
		setTimeout(function () {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			// body.classList.remove('_lock');
		}, timeout);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, timeout);
	}

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


	$('.scale-rate__var--6').click(function () {
		$('.scale-rate__var').removeClass('_active');
		$('.scale-rate__var--6').addClass('_active');

		$('.scale-rate__ball').css('left', '33%');
		$('.scale-rate__line').css('width', '34%');
	});

	$('.scale-rate__var--9').click(function () {
		$('.scale-rate__var').removeClass('_active');
		$('.scale-rate__var--9').addClass('_active');

		$('.scale-rate__ball').css('left', '64%');
		$('.scale-rate__line').css('width', '65%');
	});

	$('.scale-rate__var--12').click(function () {
		$('.scale-rate__var').removeClass('_active');
		$('.scale-rate__var--12').addClass('_active');

		$('.scale-rate__ball').css('left', '98%');
		$('.scale-rate__line').css('width', '99%');
	});

	$('.scale-rate__var--3').click(function () {
		$('.scale-rate__var').removeClass('_active');
		$('.scale-rate__var--3').addClass('_active');

		$('.scale-rate__ball').css('left', '0');
		$('.scale-rate__line').css('width', '0');
	});

	$('.card-rate__hide-block').hide();

	$('.card-rate__btn-start').click(function () {
		$('.card-rate__hide-block').slideDown();
		$('.card-rate__first-sum').hide();
		$('.card-rate__btn-start').html('К оплате');
	});

});