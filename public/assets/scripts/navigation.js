document.addEventListener('DOMContentLoaded', function() { 
	const navbar = document.getElementById("nav");
	const navbarItems = navbar.querySelectorAll('li');
	const navbarMobile = document.getElementById("nav-mobile");
	const navbarItemsMobile = navbarMobile.querySelectorAll('li');

	navbarItems.forEach(item => {
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