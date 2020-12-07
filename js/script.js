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

	AOS.init();

	const popupLinks = document.querySelectorAll('.popup-link');
	const body = document.querySelector('body');
	const lockPadding = document.querySelectorAll('.lock-padding');
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
				bodyLock();
			}
			currentPopup.classList.add('open');
			video.setAttribute('src', 'https://www.youtube.com/embed/9lO06Zxhu88');
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
});