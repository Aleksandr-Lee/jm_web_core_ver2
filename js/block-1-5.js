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















/*var swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
	  500: {
	
	  }
  }
});*/
/*const slider = document.querySelector('.swiper-container');
let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
		mySwiper = new mySwiper(slider, {
			slidesPerView: "auto",
			 spaceBetween: 30,
  			pagination: {
    			el: ".swiper-pagination",
    			clickable: true,
  							},
		});
		slider.dataset.mobile = 'true';
	}
	if (window.innerWidth > 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}
mobileSlider(); 

window.addEventListener('resize', () => {
	mobileSlider(); 
});*/

/*var swiper = new Swiper('.swiper-container', {
	slidesPerView:1,

	pagination: {
		el: '.swiper-pagination',
		
	},
});*/
