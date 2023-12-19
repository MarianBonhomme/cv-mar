document.addEventListener('DOMContentLoaded', function() {

	function preloadImages() {
		const images = [
			'../asets/imgs/bgs/wave-purple.jpg',
			'../asets/imgs/bgs/wave-red.jpg',
			'../asets/imgs/bgs/wave-green.jpg',
			'../asets/imgs/bgs/wave-blue.jpg',
			'../asets/imgs/bgs/liquid-purple.jpg',
			'../asets/imgs/bgs/liquid-red.jpg',
			'../asets/imgs/bgs/liquid-green.jpg',
			'../asets/imgs/bgs/liquid-blue.jpg',
		];
		images.forEach((image) => {
			new Image().src = image;
		});
		console.log('all loaded')
	};

	preloadImages();
});