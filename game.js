import { Character } from './character.js';
import { createEnemy } from './enemy.js';
export class Game {
	constructor() {
		this.player = new Character('You');
		this.enemy = createEnemy('goblin');
	}

	fight() {
		this.player.fight(this.enemy);
		this.enemy.fight(this.player);
	}
}
