
var Person = function(name, parentName, age) {
  this.name = name;
  this.parentName = parentName;
  this.age = age;
  
  this.isDead = function() {
    return (!this.age || this.age>115 || this.age < 0 ? true : false);
  };
};