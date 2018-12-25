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
    	},
	  })

	  $('.header-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  			var currentDot = $(sliderDots[currentSlide]);
  			for (var i = 0; i < sliderDots.length; i++) {
  				if (i === currentSlide) {
  					currentDot.addClass('active-dot');
  				} else {
  					sliderDots[i].classList.remove('active-dot');
  				}

  				if (currentSlide === 0) {
  					$('#arrow-left').addClass('disabled-arrow');
  				} else {
  					$('#arrow-left').removeClass('disabled-arrow');
  				}
  				// КОСТЫЛЬ ПОФИКСИТЬ
  				if (currentSlide === 4) {
  					$('#arrow-right').addClass('disabled-arrow');
  				} else {
  					$('#arrow-right').removeClass('disabled-arrow');
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


	sliderDots[0].classList.add('active-dot');

	// for (var i = 0; i < icons.length; i++) {
	// 	icons[i].addEventListener('mouseenter', onIconsEnter);
	// 	icons[i].addEventListener('mouseleave', onIconsLeave);
	// }

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

	// function onIconsEnter(e) {
	// 	event.target.classList.add('selected-icon');
	// 	var attribute = event.target.querySelector('img').getAttribute('id');

	// 	switch(attribute) {
	// 		case 'icon1':
	// 			event.target.querySelector('img').setAttribute('src', './img/selected-icon.png');
	// 			break;
	// 		case 'icon2':
	// 			event.target.querySelector('img').setAttribute('src', './img/selected-icon2.png');
	// 			break;
	// 		case 'icon3':
	// 			event.target.querySelector('img').setAttribute('src', './img/selected-icon3.png');
	// 			break;
	// 		case 'icon4':
	// 			event.target.querySelector('img').setAttribute('src', './img/selected-icon4.png');
	// 			break;

	// 	}
		
	// }
})