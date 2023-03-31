import './index.html';
import './index.scss';
import AOS from 'aos';
import Swiper from 'swiper/bundle';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { modal } from './modules/_modal';

modal();
AOS.init();


const menu = document.querySelector('.menu'),
	headerContacts = document.querySelector('.header__contacts'),
	menuList = document.querySelector('.menu__list'),
	menuListLink = document.querySelectorAll('.menu__list-link'),
	headerWrapper = document.querySelector('.header__wrapper'),
	header = document.querySelector('.header');


window.addEventListener('scroll', () => {

	let scroll = window.pageYOffset;
	if (scroll === 0) {


		header.classList.remove('header--top');
		headerWrapper.classList.add('header__wrapper--line');

		menuListLink.forEach(link => link.classList.remove('menu__list-link--size'));
		menu.classList.remove('menu--top');
		headerContacts.classList.remove('header__contacts--top');
		menuList.classList.remove('menu__list--top');

	} else {


		header.classList.add('header--top');
		headerWrapper.classList.remove('header__wrapper--line');

		menu.classList.add('menu--top');
		headerContacts.classList.add('header__contacts--top');
		menuList.classList.add('menu__list--top');
		menuListLink.forEach(link => link.classList.add('menu__list-link--size'));

	}

});



// slider Swiper



const mySwiper = new Swiper('.swiper-container', {
	slidesPerView: 5,
	centeredSlides: true,
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',

	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})






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





