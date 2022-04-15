class Effect {
	constructor(name, duration, stat, type) {
		this.name = name;
		this.duration = duration;
		this.stat = stat;
		this.type = type;
		this.time_to_live = this.duration;
	}
}