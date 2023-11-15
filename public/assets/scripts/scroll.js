document.addEventListener('DOMContentLoaded', function() {
	const scrollUpButton = document.getElementById("scroll-up");

	window.addEventListener('scroll', () => {
		if (window.scrollY > 100 ) {
			scrollUpButton.classList.remove('opacity-0');
		} else {
			scrollUpButton.classList.add('opacity-0');
		}
	})

	scrollUpButton.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});
})