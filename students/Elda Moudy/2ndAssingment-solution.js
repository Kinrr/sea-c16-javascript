function Person (name, parentName, optionalAge) {
	this.name = name;
	this.parentName = parentName;
	this.age = optionalAge;
}

Person.prototype.isDead = function () {
	if (0 >= this.age >= 120) {
		return true;
	}
	else {
		return false;
	}
};