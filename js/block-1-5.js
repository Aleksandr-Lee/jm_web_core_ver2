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
   if (hidden.style.maxHeight === '400px') {
		hidden.style.maxHeight = '192px'
	} else {
		hidden.style.maxHeight = '400px'
	}
	if (text.textContent === textValue ) {
		  text.textContent = 'Свернуть' 
	} else {
		  text.textContent = textValue;
	}
});
