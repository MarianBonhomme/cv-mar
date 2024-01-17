document.addEventListener('DOMContentLoaded', function() {
	const body = document.body;
	const openBtn = document.getElementById('open-menu');
	const closeBtn = document.getElementById('close-menu');
	const modal = document.getElementById('menu-mobile');

	openBtn.addEventListener('click', () => {
		toggleModal(true);
	})

	closeBtn.addEventListener('click', () => {
		toggleModal(false);
	})

	window.toggleModal = function(openMenu) {
		if (openMenu) {
			modal.classList.remove('w-0');
			modal.classList.add('w-full');
		} else {
			modal.classList.remove('w-full');
			modal.classList.add('w-0');
		}		
	}
})