var Person = function (name, parentName, age) {
	this.name = name
	this.parentName = parentName
	this.age = age
	this.isDead = function () {
		if (!this.age) {
			console.log("Well, thats awkward, " +this.name + " apears to be dead....");
      return true;
		} else {
          console.log(this.name + " is alive!");
          return false;
    }
	}
};