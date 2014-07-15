function Person(name, parentName, age) {
	this.name = name;
	this.parentName = parentName;
	this.age = age;
	this.isDead = function() {
		if (this.age == undefined || this.age > 114 || this.age <= 0) {return true}
		else {return false}
	}
	this.isAlive = function() {
		return !this.isDead();
	}
}