import './index.html';
import './index.scss';
import AOS from 'aos';
import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { modal } from './modules/_modal';

modal();
AOS.init();


const headerBox = document.querySelector('.header__box'),
	menu = document.querySelector('.menu'),
	headerContacts = document.querySelector('.header__contacts'),
	menuList = document.querySelector('.menu__list'),
	menuListLink = document.querySelectorAll('.menu__list-link'),
	headerWrapper = document.querySelector('.header__wrapper'),
	header = document.querySelector('.header');





window.addEventListener('scroll', () => {

	let scroll = window.pageYOffset;
	if (scroll === 0) {

		// headerBox.classList.remove('header__box--hide');
		header.classList.remove('header--top');
		headerWrapper.classList.add('header__wrapper--after');

		menuListLink.forEach(link => link.classList.remove('menu__list-link--size'));
		menu.classList.remove('menu--top');
		headerContacts.classList.remove('header__contacts--top');
		menuList.classList.remove('menu__list--top');

	} else {

		// headerBox.classList.add('header__box--hide');
		header.classList.add('header--top');
		headerWrapper.classList.remove('header__wrapper--after');

		menu.classList.add('menu--top');
		headerContacts.classList.add('header__contacts--top');
		menuList.classList.add('menu__list--top');
		menuListLink.forEach(link => link.classList.add('menu__list-link--size'));

	}

});

























































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





