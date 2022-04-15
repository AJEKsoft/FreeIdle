class Inventory {
  constructor(max_items = 0) {
	this.max_items = max_items;
	this.items = [];
  }

  add(item) {
	this.items.push(item);
  }

  remove(item) {
	this.items = this.items.filter(i => i !== item);
  }

  getItems() {
	return this.items;
  }
}