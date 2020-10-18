if (window.innerWidth <= 767) {
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
	 });
	}

var clickBtn = document.querySelector('.button-show');
var hidden = document.querySelector('.limit-height');
var text = document.querySelector('.button-show__text');
var textValue =  text.textContent;

clickBtn.addEventListener('click', function () {
	if (hidden.style.maxHeight) {
		hidden.style.maxHeight = hidden.scrollHeight + 'px';
	} else {
		hidden.classList.toggle('limit-height');
	}		
	if (text.textContent === textValue ) {
		text.textContent = 'Свернуть'
		clickBtn.classList.remove('button-show--down');
		clickBtn.classList.add('button-show--up');
	} else {
		text.textContent = textValue;
		clickBtn.classList.remove('button-show--up');
		clickBtn.classList.add('button-show--down');
	}
});
