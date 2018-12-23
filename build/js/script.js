var card = document.querySelectorAll('.portfolio__cards_card');
var portfolioButtons = document.querySelectorAll('.portfolio__buttons a');
var playButton = document.querySelector('.video-presentation__play-btn');
var posts = document.querySelectorAll('.post');
var recentPosts = document.querySelectorAll('.recent-post');

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
	console.log(event.target);
	event.target.classList.add('selected-recent-post');
}

function onRecentPostLeave(e) {
	event.target.classList.remove('selected-recent-post');
}