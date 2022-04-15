import { Game } from './game.js';

let $ = document.querySelector.bind(document);

function createUI(game) {
	let ui = $('#ui-container');

	createCharacterUI(game.player, 'player');
	createCharacterUI(game.enemy, 'enemy');
	// make a button to fight
	let button = document.createElement('button', 'fight-button');
	button.innerText = 'Fight';
	button.addEventListener('click', () => {
		game.fight();
		updateUI(game);
	});
	ui.appendChild(button);
}

function createCharacterUI(character, name) {
	let ui_container = $('#ui-container');
	let character_stats = document.createElement('div');
	character_stats.classList.add('character-stats');
	character_stats.innerHTML = `
		<p><span id="${name}-name">${character.name}</span></p>
		<p>Health: <span id="${name}-hp">${character.hp}</span></p>
		<p>Strength: <span id="${name}-strength">${character.strength}</span></p>
		<p>Agility: <span id="${name}-agility">${character.agility}</span></p>
		<p>Intelligence: <span id="${name}-intelligence">${character.intelligence}</span></p>
	`;
	ui_container.appendChild(character_stats);
}

function updateUI(game) {
	updateCharacterUI(game.player, 'player');
	updateCharacterUI(game.enemy, 'enemy');
}

function updateCharacterUI(character, name) {
	$(`#${name}-hp`).innerText = character.hp;
	$(`#${name}-strength`).innerText = character.strength;
	$(`#${name}-agility`).innerText = character.agility;
	$(`#${name}-intelligence`).innerText = character.intelligence;
}

export default function main () {
	let canvas = $('#game-canvas');
	let ctx = canvas.getContext('2d');
	let width = canvas.width;
	let height = canvas.height;

	let game = new Game();

	createUI(game);
}

window.onload = main;
