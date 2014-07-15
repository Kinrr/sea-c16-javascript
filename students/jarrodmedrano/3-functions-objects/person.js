var Person = function(fname, parentname, age) {
	this.fname = fname;
	this.parentname = parentname;
	this.age = age;
	this.isDead = function() {
		if(!this.age) {
			return false;
		}
		else if(this.age >= 115 || this.age <= 0 ) {
			return true;
		} else {
			return false;
		}
	}
}