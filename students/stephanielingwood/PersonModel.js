function Person(name, parent1, parent2, age) {
	this.name = name;
	this.parent1 = parent1;
	this.parent2 = parent2;
	this.age = age;
	this.isAlive = function(){
		return !!((116 > this.age && this.age > -1) && this.age)
	}
	this.isDead = function(){
		return !this.isAlive();
	}
}