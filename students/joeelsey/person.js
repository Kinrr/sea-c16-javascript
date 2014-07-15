var person = function(name,age,parentsName) {
	this.name = name;
	this.age = age;
	this.parentsName = parentsName;
  this.isDead = typeof(this.age) == 'number' ? true : false;
};

person.prototype.isAlive = function() {
    if (this.age >= 1 && this.age <= 120) {
      return true;
    }
};

var joe = new person('joe',35,'john');
joe.isAlive();
