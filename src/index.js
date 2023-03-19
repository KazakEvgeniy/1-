import './index.html';
import './index.scss';
import AOS from 'aos';
import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { modal } from './modules/_modal';

modal();


AOS.init();


SwiperCore.use([Navigation, Pagination]);



const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
		// bulletActiveClass: 'act'
	},
	effect: 'cube',
	// cubeEffect: {
	// 	slideShadows: false,
	// },
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',

	},

});



// function menuSliderRemove() {
// 	let menuLinkActive = document.querySelectorAll('.menu__link._active');
// 	if (menuLinkActive) {
// 		menuLinks.classList.remove('_active');
// 	}
// }

// swiper.init();

// const listBtn = document.querySelector('.product__slide-list');
// const sliderImg = document.querySelectorAll('.swiper-slide');
// const productSlideItem = document.querySelectorAll('.product__slide-item');


// function hidencontentandTabClassActiv() {

// 	sliderImg.forEach(item => {
// 		item.classList.remove('swiper-slide-active');
// 	});
// }


// function showContent(i = 0) {
// 	sliderImg[i].classList.add('swiper-slide-active');

// }


// listBtn.addEventListener('click', (event) => {
// 	const target = event.target;
// 	if (target && target.classList.contains('product__slide-item')) {

// 		productSlideItem.forEach((tab, i) => {
// 			if (target == tab) {
// 				hidencontentandTabClassActiv();
// 				showContent(i);
// 			}

// 		});

// 	}
// })








function header() {
	const header = document.querySelector('.header'),
		contact = document.querySelector('.contact'),
		headerHover = document.querySelector('.header__hover'),
		menuList = document.querySelector('.menu__list');

	window.addEventListener('scroll', () => {
		let scroll = window.pageYOffset;

		if (scroll == 0) {
			header.classList.remove('header__scroll');
			headerHover.style.transform = 'translateY(-100px)';
			menuList.style.right = '-185px';
			contact.style.opacity = '0';
			contact.style.transform = 'scale(0)';
		}
		else if (scroll > 0) {
			header.classList.add('header__scroll');
			headerHover.style.transform = 'translateY(0px)';
			menuList.style.right = '0px';
			contact.style.opacity = '1';
			contact.style.transform = 'scale(1)';
		}
	});
}

header();



