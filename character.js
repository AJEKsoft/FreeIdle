import { Inventory } from './inventory.js';

// This class describes any character that can fight

export class Character {
	constructor(name) {
		this.name = name;
		this.hp = 100;
		this.stats = { health: 10, strength: 10, agility: 10, intelligence: 10 };
		this.money = 0;
		this.level = 1;
		this.exp = 0;
		this.inventory = new Inventory();
		this.effects = [];
		this.equipped_items = [];
	}

	getStat(name) {
		let multiplier = 1;
		let additioner = 0;
		for (let effect of this.effects) {
			if (effect.stat === name) {
				if (effect.type === 'multiply') {
					multiplier *= effect.value;
				} else if (effect.type === 'add') {
					additioner += effect.value;	
				}
			}
		}
		return this.stats[name] * multiplier + additioner;
	}

	get strength() {
		return this.getStat('strength');
	}

	get health() {
		return this.getStat('health');
	}

	get agility() {
		return this.getStat('agility');
	}

	get intelligence() {
		return this.getStat('intelligence');
	}

	get attack() {
		let additional = 0;
		for (let item of this.equipped_items) {
			if (item.type === 'weapon') {
				additional += items.attack;
			}
		}
		return this.strength + additional;
	}

	receiveDamage(damage) {
		this.hp -= damage;
		if (this.hp <= 0) {
			this.hp = 0;
		}
	}

	update(dt) {
		for (let effect of this.effects) {
			effect.time_to_live -= dt;
			if (effect.time_to_live <= 0) {
				this.effects = this.effects.filter(e => e !== effect);
			}
		}
	}
}