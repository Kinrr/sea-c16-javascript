var Person = function (name, parent, age, parentAge) {
  this.name = name;
  this.parent = parent;
  this.age = age;
  this.parentAge = parentAge;
  this.ageCheck = function (age, parentAge) {
    if (!this.age || this.age > 150 || this.age >= this.parentAge) {
      return false;
    } else {
      return true;
    }
  };
};