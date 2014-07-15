var Person = function(name, parentName, age) {
	this.name = name;
	this.parentName = parentName;
	this.age = age;
	this.isDead = function() {
		if (this.age > 114 || !this.age) {
			return (this.age > 114 || !this.age);
		}
		else {
			return !this.age;
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
