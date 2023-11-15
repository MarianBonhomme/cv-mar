document.addEventListener('DOMContentLoaded', function() { 
	const navbar = document.querySelector("header");
	const navbarItems = navbar.querySelectorAll('li');

	navbarItems.forEach(item => {
		item.addEventListener('click', () => {
			scrollToSection(item.getAttribute('data-value'));
		});
	});

	function scrollToSection(item) {
		var section = document.getElementById(item);
		section.scrollIntoView({ block: 'start', behavior: "smooth" });
	}
})