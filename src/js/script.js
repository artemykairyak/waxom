$(document).ready(function(){
	$('.header-slider').slick({
		prevArrow: $('#arrow-left'),
		nextArrow: $('#arrow-right'),
		speed: 500,
		infinite: false,
		dots: true,
		appendDots: $('.slider'),
		customPaging: function(slider, i) {
			return '<span class="dot"></span>';
		}
	});

	$('.header-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentDot = $(sliderDots[this.slick.currentSlide]);
		for (var i = 0; i < sliderDots.length; i++) {
			if (i === this.slick.currentSlide) {
				currentDot.addClass('active-dot');
			} else {
				sliderDots[i].classList.remove('active-dot');
			}

			if (this.slick.currentSlide === 0) {
				$('#arrow-left').addClass('disabled-arrow');
			} else {
				$('#arrow-left').removeClass('disabled-arrow');
			}

			if (this.slick.currentSlide === this.slick.slideCount - 1) {
				$('#arrow-right').addClass('disabled-arrow');
			} else {
				$('#arrow-right').removeClass('disabled-arrow');
			}
		}
	});

	$('.browser__wrapper').slick({
		responsive: [
		{
			breakpoint: 2048,
			settings: "unslick"
		},
		{
			breakpoint: 1199,
			settings: {
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				centerPadding: '70px',
				arrows: false,
				adaptiveHeight: true,
				initialSlide: 1					
			}
		},
		{
			breakpoint: 480,
			settings: {
				centerMode: false,
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				arrows: false,
				adaptiveHeight: true,
				initialSlide: 1					
			}
		}
		]
	});

	$('.portfolio__cards').slick({
		responsive: [
		{
			breakpoint: 2048,
			settings: "unslick"
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: false,
				arrows: false				
			}
		}]
	});

	$('.posts-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 500,
		infinite: false,
		adaptiveHeight: false,
		prevArrow: $('.posts_nav__prev-posts'),
		nextArrow: $('.posts_nav__next-posts'),
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

	$('.posts-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		if (this.slick.currentSlide === 0) {
			$('.posts_nav__prev-posts').addClass('disabled-post-arrow');
		} else {
			$('.posts_nav__prev-posts').removeClass('disabled-post-arrow');
		}

		if (document.body.clientWidth < 1199 && document.body.clientWidth > 767) {
			if (this.slick.currentSlide === this.slick.slideCount - 2) {
				$('.posts_nav__next-posts').addClass('disabled-post-arrow');
			} else {
				$('.posts_nav__next-posts').removeClass('disabled-post-arrow');
			}
		} 

		else if (document.body.clientWidth <= 767) {
			console.log(this.slick.currentSlide);
			if (this.slick.currentSlide === this.slick.slideCount - 1) {
				$('.posts_nav__next-posts').addClass('disabled-post-arrow');
			} else {
				$('.posts_nav__next-posts').removeClass('disabled-post-arrow');
			}
		} 

		else {
			if (this.slick.currentSlide === this.slick.slideCount - 3) {
				$('.posts_nav__next-posts').addClass('disabled-post-arrow');
			} else {
				$('.posts_nav__next-posts').removeClass('disabled-post-arrow');
			}
		}
	});

	var card = document.querySelectorAll('.portfolio__cards_card');
	var portfolioButtons = document.querySelectorAll('.portfolio__buttons a');
	var playButton = document.querySelector('.video-presentation__play-btn');
	var posts = document.querySelectorAll('.post');
	var recentPosts = document.querySelectorAll('.recent-post');
	var twitterPosts = document.querySelectorAll('.twitter-post');
	var bottomMenuItems = document.querySelectorAll('.footer__bottom li');
	var sliderDots = document.querySelectorAll('.slider .dot');
	var sliderArrows = document.querySelectorAll('.slider-arrow');
	var sliderArrowLeft = document.querySelector('#arrow-left');
	var sliderArrowRight = document.querySelector('#arrow-right');
	var icons = document.querySelectorAll('.icons__icon');
	var postDots = document.querySelectorAll('.post-dots .dot');
	var navIcons = document.querySelectorAll('.nav_icon');
	var loadMoreBtn = document.querySelector('#load-more-btn');

	sliderDots[0].classList.add('active-dot');

	for (var i = 0; i < navIcons.length; i++) {
		navIcons[i].addEventListener('mouseenter', onNavIconsEnter);
		navIcons[i].addEventListener('mouseleave', onNavIconsLeave);
	}

	for (var i = 0; i < icons.length; i++) {
		icons[i].addEventListener('mouseenter', onIconsEnter);
		icons[i].addEventListener('mouseleave', onIconsLeave);
	}

	for (var i = 0; i< twitterPosts.length; i++) {
		twitterPosts[i].addEventListener('mouseenter', onTwitterPostsEnter);
		twitterPosts[i].addEventListener('mouseleave', onTwitterPostsLeave);
	}

	for (var i = 0; i< bottomMenuItems.length; i++) {
		bottomMenuItems[i].addEventListener('mouseenter', onbottomMenuItemsEnter);
		bottomMenuItems[i].addEventListener('mouseleave', onbottomMenuItemsLeave);
	}

	for (var i = 0; i< recentPosts.length; i++) {
		recentPosts[i].addEventListener('mouseenter', onRecentPostEnter);
		recentPosts[i].addEventListener('mouseleave', onRecentPostLeave);
	}

	for (i = 0; i < card.length; i++) {
		card[i].addEventListener('mouseenter', onCardEnter);
		card[i].addEventListener('mouseleave', onCardLeave);
	}

	for (i = 0; i < portfolioButtons.length; i++) {
		portfolioButtons[i].addEventListener('click', onPortfolioButtonClick);
	}

	for (i = 0; i < posts.length; i++) {
		posts[i].addEventListener('mouseenter', onPostEnter);
		posts[i].addEventListener('mouseleave', onPostLeave);
	}

	function onPortfolioButtonClick(e) {
		e.preventDefault();
		for (i = 0; i < portfolioButtons.length; i++) {
			if (portfolioButtons[i] === e.target) {
				portfolioButtons[i].classList.add('selected-portfolio-btn');
			}	else {
				portfolioButtons[i].classList.remove('selected-portfolio-btn');
			}
		}
	}

	function onCardEnter(e) {
		e.target.classList.add('selected-portfolio-card');
		this.querySelector('.toplabel').style.color = '#ffffff';
		this.querySelector('.bottomlabel').style.color = '#c7b299';
		this.querySelector('img').style.filter = 'brightness(50%)';
	} 

	function onCardLeave(e) {
		e.target.classList.remove('selected-portfolio-card');
		this.querySelector('.toplabel').style.color = '';
		this.querySelector('.bottomlabel').style.color = '';
		this.querySelector('img').style.filter = '';
	} 

	playButton.addEventListener('mouseenter', function(e) {
		e.target.querySelector('.play-btn-circle').style.transform = 'rotate(360deg)';
	});

	playButton.addEventListener('mouseleave', function(e) {
		e.target.querySelector('.play-btn-circle').style.transform = '';
	})

	function onPostEnter(e) {
		e.target.classList.add('selected-post');
	};

	function onPostLeave(e) {
		e.target.classList.remove('selected-post');
	} 

	function onRecentPostEnter(e) {
		e.target.classList.add('selected-recent-post');
	}

	function onRecentPostLeave(e) {
		e.target.classList.remove('selected-recent-post');
	}

	function onbottomMenuItemsEnter(e) {
		e.target.classList.add('selected-bottom-menu-item');
	}

	function onbottomMenuItemsLeave(e) {
		e.target.classList.remove('selected-bottom-menu-item');
	}

	function onTwitterPostsEnter(e) {
		e.target.classList.add('selected-twitter-post');
	}

	function onTwitterPostsLeave(e) {
		e.target.classList.remove('selected-twitter-post');
	}

	function onIconsEnter(e) {
		e.target.classList.add('selected_icon');
		e.target.querySelector('.active-icon').classList.add('enable-icon');
		e.target.querySelector('.unactive-icon').classList.add('disable-icon');
	}

	function onIconsLeave(e) {
		e.target.classList.remove('selected_icon');
		e.target.querySelector('.active-icon').classList.remove('enable-icon');
		e.target.querySelector('.unactive-icon').classList.remove('disable-icon');
	}

	function onNavIconsEnter(e) {
		e.target.querySelector('.active-icon').classList.add('enable-icon');
		e.target.querySelector('.unactive-icon').classList.add('disable-icon');
	}

	function onNavIconsLeave(e) {
		e.target.querySelector('.active-icon').classList.remove('enable-icon');
		e.target.querySelector('.unactive-icon').classList.remove('disable-icon');
	}

	loadMoreBtn.addEventListener('click', loadMoreAJAX);

	function loadMoreAJAX(e) {
		var newData = '';
		$.ajax({
			type: 'POST',
			url: '../php/server.php',
			success: function(data) {
				newData = data;
				console.log(newData);
				$('.more-posts').append(newData);
				$('.portfolio__cards:last').css('opacity', 0)
				.animate({opacity: '1'}, 1000);
			}
		})
		e.preventDefault();
	}

	$('.burger-icon').on('click', function(e) {
		$('.menu-popup').fadeToggle();
	})
})