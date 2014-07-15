/** 

Create a classification of an object that describes a person in Javascript. It's constructor should take a name, parent name, and optional age. The object should have a #isDead method ??that returns a boolean based on if the age is set or not.

var Person = function(name) {
    this.name = name;
  }

**/

var Person = function(name, parentName, age) {
  this.name = name;
  this.parentName = parentName;
  this.age = age;
  this.isDead = function() {
    // assuming 114 is the oldest person alive and that 0 is an unborn age
    if (this.age > 114 || this.age <= 0) {
      return true;
    } else {
      return false;
    }};
};