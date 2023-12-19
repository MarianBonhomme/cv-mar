document.addEventListener('DOMContentLoaded', function() {
	const root = document.documentElement;

	const settingsButton = document.getElementById('settings-button');
	const settingsDropdown = document.getElementById('settings-dropdown');

	const colorButtons = document.querySelectorAll('.color-button');

	var currentTheme = 'wave';
	var currentColor = 'purple';
	var currentHexa = '#664EAC';

	switchColor(currentTheme, currentColor, currentHexa);

	settingsButton.addEventListener('click', () => {
		settingsDropdown.classList.toggle('hidden');
	});

	colorButtons.forEach(item => {
		item.addEventListener('click', () => {
			const theme = item.getAttribute('theme');
			const color = item.getAttribute('color');
			const hexa = item.getAttribute('hexa');
			switchColor(theme, color, hexa);
		});
	});

	function switchColor(theme, color, hexa) {
		root.style.setProperty('--background-url', `url('../imgs/bgs/${theme}-${color}.jpg')`);
		root.style.setProperty('--color-primary', hexa);
	};
	
});
