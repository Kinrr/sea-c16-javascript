var Person = function (name, parent_name, age) {
 	this.name = name;
 	this.parent_name = parent_name;
 	this.age = age;

 	this.isDead = function () {
 		if (this.age > 170 || this.age < 0 || !this.age) {
 			return true;
 		} else {
 			return false;
 		}
 	};

	this.isAlive = function () {
 	 	if (!this.isDead()) {
 	 		return true;
 	 	} else {
 	 		return false;
 	 	}
 	};
 };
