//Test fiddle: http://jsfiddle.net/cFWMS/

var Person = function(name, parent, age) {
	this.name = name;
	this.parent = parent;
	this.age = age;
};

Person.prototype.isAlive = function() {
	return this.age > 0 && this.age < 120 ? true : false;
};