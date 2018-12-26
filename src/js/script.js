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

	   $('.post__image_slider').slick({
		speed: 500,
		infinite: false,
		dots: true,
		arrows: false,
		appendDots: $('.post-dots'),
		customPaging: function(slider, i) {
      		return '<span class="dot"></span>';
    	}
	  });

	   $('.post__image_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  			var currentDot = $(postDots[this.slick.currentSlide]);
  			for (var i = 0; i < postDots.length; i++) {
  				if (i === this.slick.currentSlide) {
  					currentDot.addClass('active-dot');
  				} else {
  					postDots[i].classList.remove('active-dot');
  				}
  			}
  		});	

	   $('.posts-slider').slick({
		speed: 500,
		infinite: false,
		prevArrow: $('.posts_nav__prev-posts'),
		nextArrow: $('.posts_nav__next-posts')
	  });

	   $('.posts-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
			if (this.slick.currentSlide === 0) {
				$('.posts_nav__prev-posts').addClass('disabled-post-arrow');
			} else {
				$('.posts_nav__prev-posts').removeClass('disabled-post-arrow');
			}
			
			if (this.slick.currentSlide === this.slick.slideCount - 1) {
				$('.posts_nav__next-posts').addClass('disabled-post-arrow');
			} else {
				$('.posts_nav__next-posts').removeClass('disabled-post-arrow');
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


	postDots[0].classList.add('active-dot');
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
			if (portfolioButtons[i] === event.target) {
				portfolioButtons[i].classList.add('selected-portfolio-btn');
				}	else {
					portfolioButtons[i].classList.remove('selected-portfolio-btn');
				}
		}
	}

	function onCardEnter(e) {
		event.target.classList.add('selected-portfolio-card');
		this.querySelector('.toplabel').style.color = '#ffffff';
		this.querySelector('.bottomlabel').style.color = '#c7b299';
		this.querySelector('img').style.filter = 'brightness(50%)';
		this.querySelector('.arrow').style.opacity = '0';
	} 

	function onCardLeave(e) {
		event.target.classList.remove('selected-portfolio-card');
		this.querySelector('.toplabel').style.color = '';
		this.querySelector('.bottomlabel').style.color = '';
		this.querySelector('img').style.filter = '';
		this.querySelector('.arrow').style.opacity = '';
	} 

	playButton.addEventListener('mouseenter', function(e) {
		event.target.querySelector('.play-btn-circle').style.transform = 'rotate(360deg)';
	});

	playButton.addEventListener('mouseleave', function(e) {
		event.target.querySelector('.play-btn-circle').style.transform = '';
	})

	function onPostEnter(e) {
		event.target.classList.add('selected-post');
	};

	function onPostLeave(e) {
		event.target.classList.remove('selected-post');
	} 

	function onRecentPostEnter(e) {
		event.target.classList.add('selected-recent-post');
	}

	function onRecentPostLeave(e) {
		event.target.classList.remove('selected-recent-post');
	}

	function onbottomMenuItemsEnter(e) {
		event.target.classList.add('selected-bottom-menu-item');
	}

	function onbottomMenuItemsLeave(e) {
		event.target.classList.remove('selected-bottom-menu-item');
	}

	function onTwitterPostsEnter(e) {
		event.target.classList.add('selected-twitter-post');
	}

	function onTwitterPostsLeave(e) {
		event.target.classList.remove('selected-twitter-post');
	}

	function onIconsEnter(e) {
		event.target.classList.add('selected_icon');
		event.target.querySelector('.active-icon').classList.add('enable-icon');
		event.target.querySelector('.unactive-icon').classList.add('disable-icon');
	}

	function onIconsLeave(e) {
		event.target.classList.remove('selected_icon');
		event.target.querySelector('.active-icon').classList.remove('enable-icon');
		event.target.querySelector('.unactive-icon').classList.remove('disable-icon');
	}

	function onNavIconsEnter(e) {
		event.target.querySelector('.active-icon').classList.add('enable-icon');
		event.target.querySelector('.unactive-icon').classList.add('disable-icon');
	}

	function onNavIconsLeave(e) {
		event.target.querySelector('.active-icon').classList.remove('enable-icon');
		event.target.querySelector('.unactive-icon').classList.remove('disable-icon');
	}
})