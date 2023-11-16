document.addEventListener('DOMContentLoaded', function() {
	const root = document.documentElement;

	const settingsButton = document.getElementById('settings-button');
	const settingsDropdown = document.getElementById('settings-dropdown');

	const waveTheme = document.getElementById('wave-theme');
	const liquidTheme = document.getElementById('liquid-theme');

	const colorButtons = document.querySelectorAll('.color-button');
	const themeSwitcherButtons = document.querySelectorAll('#theme-switcher-button')

	var currentTheme = 'liquid';
	var currentColor = 'green';
	var currentHexa = '#209073';

	switchColor(currentTheme, currentColor, currentHexa);

	// open dropdown
	settingsButton.addEventListener('click', () => {
		settingsDropdown.classList.toggle('hidden');
	});

	// switch color
	colorButtons.forEach(item => {
		item.addEventListener('click', () => {
			const color = item.getAttribute('data-color');
			const hexa = item.getAttribute('data-hexa');
			currentColor = color;
			currentHexa = hexa;
			switchColor(currentTheme, color, hexa);
		});
	});

	//switch theme
	themeSwitcherButtons.forEach(button => {
		button.addEventListener('click', () => {
			switchTheme();
		})
	});	


	function switchColor(theme, color, hexa) {
		root.style.setProperty('--background-url', `url('../imgs/bgs/${theme}-${color}.jpg')`);
		root.style.setProperty('--color-primary', hexa);
	};	

	function switchTheme() {
		(currentTheme === 'liquid') ? currentTheme = 'wave' : currentTheme = 'liquid';
		switchColor(currentTheme, currentColor, currentHexa);
		waveTheme.classList.toggle('hidden');
		liquidTheme.classList.toggle('hidden');
	}
});