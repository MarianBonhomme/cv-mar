document.addEventListener('DOMContentLoaded', function() { 
	const navbarMobile = document.getElementById("nav-mobile");
	const navbarItemsMobile = navbarMobile.querySelectorAll('li');
	const navItems = document.querySelectorAll('.nav');

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			scrollToSection(item.getAttribute('data-value'));
		});
	});

	navbarItemsMobile.forEach(item => {
		item.addEventListener('click', () => {
			scrollToSection(item.getAttribute('data-value'));
			toggleModal(false);
		});
	});

	function scrollToSection(item) {
		var section = document.getElementById(item);
		section.scrollIntoView({ block: 'start', behavior: "smooth" });
	}
})