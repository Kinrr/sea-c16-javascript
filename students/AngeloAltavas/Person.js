var Person = function(name, parent, age){
	this.name = name;
	this.parent = parent;
	this.age = age;
	this.isDead = function () {
		if(this.age == undefined)
			return true;
		else
			return false;
	}
	this.isAlive = function () {
		if(this.age > 115)
			return false;
		else if (this.age == undefined)
			return false;
		else
			return true;
	}
}