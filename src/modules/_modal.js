export function modal() {

	const btns = document.querySelectorAll('[data-modal="modal"]'),
		modal = document.querySelector('.modal'),
		closeModal = document.querySelector('.form__close'),
		formTitle = document.querySelector('.form__title');

	btns.forEach(btn => {
		btn.addEventListener('click', (e) => {
			const target = e.target;
			formTitle.innerText = target.innerText;
			modal.classList.add('show');
			modal.classList.remove('hide');

		});

	});


	function closeModalWindow() {
		modal.classList.add('hide');
		modal.classList.remove('show');
	}


	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModalWindow();
		}
	});


	closeModal.addEventListener('click', closeModalWindow);


	document.addEventListener('keydown', (e) => {

		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModalWindow();
		}
	});







}