var Person = function(name, parentname, age) {
  this.name = name;
  this.parentname = parentname;
  this.age = age || 0;
  this.message = "";
  this.isDead = function() {
	if (!this.age || this.age < 0) {
        return true;
    } else {
        return false;
    }
  }
  this.isValid = function() {
    if (this.age <= 0 || this.age > 110) {
        return false;
    } else {
        return true;
    }
   }
}

