document.addEventListener('DOMContentLoaded', function() {

	function preloadImages() {
		const images = [
			'../imgs/bgs/wave-purple.jpg',
			'../imgs/bgs/wave-red.jpg',
			'../imgs/bgs/wave-green.jpg',
			'../imgs/bgs/wave-blue.jpg',
			'../imgs/bgs/liquid-purple.jpg',
			'../imgs/bgs/liquid-red.jpg',
			'../imgs/bgs/liquid-green.jpg',
			'../imgs/bgs/liquid-blue.jpg',
		];
		images.forEach((image) => {
			new Image().src = image;
		});
	}

	preloadImages();

});