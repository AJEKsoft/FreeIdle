import { Game } from './game.js';

let $ = document.querySelector.bind(document);

function createUI(game) {
	let ui = $('#ui-container');

	// create a div for each player stats
	let player = game.player;
	let player_stats = document.createElement('div');
	player_stats.classList.add('player-stats');
	player_stats.innerHTML = `
		<div class="player-name">${player.name}</div>
		<div class="player-hp">HP: ${player.hp}</div>
		<div class="player-strength">STR: ${player.strength}</div>
		<div class="player-agility">AGI: ${player.agility}</div>
		<div class="player-intelligence">INT: ${player.intelligence}</div>
	`;
	// add to the div
	ui.appendChild(player_stats);
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
