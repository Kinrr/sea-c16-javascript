var Person = function(name, parentName, age) {
	this.name = name;
	this.parentName = parentName;
	this.age = age;
	this.isDead = function() {
		if (this.age > 114 || !this.age) {
			return true;
		}
		else {
			return false;
		}
	};
	this.isAlive = function() {
		if (this.age < 114 && !!this.age) {
			return true;
		}
		else {
			return false;
		}
	};
};
