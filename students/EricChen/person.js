var Person = function(inputName, inputParentName, inputAge) {
  this.name = inputName;
  this.parent = inputParentName;
  this.age = inputAge;
  this.isDead = function() {
    return !!(!this.age || this.age > 115);
  }
}
