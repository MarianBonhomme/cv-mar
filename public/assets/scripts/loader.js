document.addEventListener('DOMContentLoaded', function() {

	function preloadImages() {
		const images = [
			'../assets/imgs/bgs/wave-purple.jpg',
			'../assets/imgs/bgs/wave-red.jpg',
			'../assets/imgs/bgs/wave-green.jpg',
			'../assets/imgs/bgs/wave-blue.jpg',
			'../assets/imgs/bgs/liquid-purple.jpg',
			'../assets/imgs/bgs/liquid-red.jpg',
			'../assets/imgs/bgs/liquid-green.jpg',
			'../assets/imgs/bgs/liquid-blue.jpg',
		];
		images.forEach((image) => {
			new Image().src = image;
		});
	}

	preloadImages();
});