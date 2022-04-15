import { Character } from './character.js';

function createGoblin() {
	let goblin = new Character('Goblin');
	goblin.stats = { health: 20, strength: 10, agility: 10, intelligence: 10 };
	return goblin;
}

function createTroll() {
	let troll = new Character('Troll');
	troll.stats = { health: 100, strength: 10, agility: 10, intelligence: 10 };
	return troll;
}

export function createEnemy(type) {
	let enemy;
	if (type === 'goblin') {
		enemy = createGoblin();
	} else if (type === 'troll') {
		enemy = createTroll();
	}
	return enemy;
}
