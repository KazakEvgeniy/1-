import './index.html';
import './index.scss';
import Swiper from 'swiper/bundle';
import { sendForm } from './modules/sendForm';

document.addEventListener('DOMContentLoaded', (e) => {
	e.preventDefault();
	sendForm();



	const menu = document.querySelector('.menu'),
		headerContacts = document.querySelector('.header__contacts'),
		menuList = document.querySelector('.menu__list'),
		menuListLink = document.querySelectorAll('.menu__list-link'),
		headerWrapper = document.querySelector('.header__wrapper'),
		header = document.querySelector('.header'),
		section = document.querySelectorAll('section[id]'),
		menuBurger = document.querySelector('.menu-burger');



	menuBurger.addEventListener('click', () => {
		menuList.classList.toggle('header-mobile--menu');
	})


	menuListLink.forEach((item, i) => {
		item.addEventListener('click', () => {
			menuList.classList.toggle('header-mobile--menu');
			section[i].style.paddingTop = 85 + 'px';
			section[i].previousElementSibling.style.paddingBottom = 0 + 'px';
		})
	})


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



	// marketplace-slider

	const mySwiper = new Swiper('.marketplace-slider', {
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		speed: 500,

		breakpoints: {
			320: {
				slidesPerView: 1,
				centeredSlides: true,
				autoplay: {
					enabled: true,
					delay: 1200,
				},
			},
			420: {
				centeredSlides: false,
				slidesPerView: 2,
			},
			620: {
				slidesPerView: 3,
				spaceBetween: 30,

			},
			960: {
				slidesPerView: 4,
				centeredSlides: false,
			},
			1020: {
				slidesPerView: 5,

			},
		},
	})




	// cases-slide

	const casesList = document.querySelectorAll('.cases__list-item');

	const cases = new Swiper('.cases-slide', {
		slidesPerView: 1,
		centeredSlides: true,
		allowTouchMove: false,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		pagination: {
			el: '.cases-pagination',
			type: 'bullets',
			clickable: true,
			renderBullet: function (index, className) {

				return `

					<li class="${className}">
					 ${casesList[index].innerHTML}
					</li>

			`

			},
		},


	})

	casesList.forEach(item => item.remove());


	// offer-slider

	const offerPaginationItems = document.querySelectorAll('.offer-pagination__item');

	const swiper = new Swiper(".offer-slider", {
		loop: true,

		autoplay: {
			delay: 2000,
		},

		breakpoints: {
			320: {
				enabled: true,
				slidesPerView: 1,

			},
			768: {
				enabled: false,
				slidesPerView: 3,
				spaceBetween: 30,
				allowTouchMove: false,

			},
		},

		pagination: {
			el: '.offer-pagination',
			type: 'bullets',
			clickable: true,
			bulletClass: 'offer__swiper-pagination-bullet',
			bulletActiveClass: 'offer__swiper-pagination-bullet-active',

			renderBullet: function (index, className) {

				return `
					<li class="${className}">
					 ${offerPaginationItems[index].innerHTML}
					</li>
			`
			},
		},

	});

	offerPaginationItems.forEach(item => item.remove());


})




