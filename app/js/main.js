$(function () {

	$('.header__btn').on('click', function () {
		$('.rightside-menu').removeClass('rightside-menu--close');
	})
	$('.rightside-menu--close').on('click', function () {
		$('.rightside-menu').addClass('rightside-menu--close');
	});

	$('.header__btn-menu').on('click', function () {
		$('.menu').toggleClass('menu--open');
	});

	$('.top__slider').slick({
		dots: true,
		arrows: false,
		fade: true,
		autoplay: true
	});

	$('.contact-slider').slick({
		slidesToShow: 10, 
		slidesToScroll: 10,
		dots: true,
		arrows: false
	});

	$('.artical-slider__box').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="artical-slider__arrow artical-slider__arrowleft"><img src="images/arrow-slider-left.svg" alt="slider-left"></button>',
		nextArrow: '<button type="button" class="artical-slider__arrow artical-slider__arrowright"><img src="images/arrow-slider-right.svg" alt="slider-right"></button>',
	});

	var mixer = mixitup('.gallery__inner', {
		load: {
			filter: '.living'
		}
	});



})


