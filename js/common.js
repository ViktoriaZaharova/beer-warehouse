$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.btn-burger').click(function () {
	$('.nav-menu').fadeToggle();
});

$('.nav-menu__close').click(function () {
	$('.nav-menu').fadeOut();
});

$('.home-slider').slick({
	slidesToShow: 1,
	fade: true,
	appendArrows: '.home-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.news-slider').slick({
	slidesToShow: 3,
	variableWidth: true,
	appendArrows: '.news-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				variableWidth: false,
			}
		}
	]
});


$('.news-sales-slider').slick({
	slidesToShow: 1,
	fade: true,
	dots: true,
	appendDots: '.news-sales-slider__nav',
	appendArrows: '.news-sales-slider__nav',
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	
});

$('.gallery-slider').slick({
	slidesToShow: 3,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		}
	]
});

Fancybox.bind("[data-fancybox]", {
	// Your custom options
});