var Person = function(name, parentName, age) {
	this.name = name;
	this.parentName = parentName;
	this.age = age;
	this.isDead = function (age) {
		if(this.age) {
			return false;
		}
		else {
			return true;
		}
	};
  	this.isAlive = function(age) {
	    if (this.age >= 100) {
	      return name + " is six feet under.";
	    }
	    else if (this.age <= 0) {
	      return name + " has not been born yet.";
	    }
	    else {
	    	return name + " is alive!";
	    }
	};
};

var bob = new Person("Bob", "Dr. Wilson", 12);

