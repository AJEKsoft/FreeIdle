class Consumable extends Item {
	constructor(name, price, effect) {
		super(name, price);
		this.effect = effect;
	}

	consume() {
		this.effect();
	}
}