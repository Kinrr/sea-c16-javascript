var Person = function(name, parentName, age) {
  this.name = name;
  this.parentName = parentName;
  // in case of accidental '#' entry
  age = parseInt(age, 10);
  // prevents this.age assignment if age is not a number. Unfortunately,
  // isDead or isLive methods can work without age being defined.
  // In a real world situation, the user will never get to the isDead or isLive
  // methods since it wouldn't pass this js test
  return isNaN(age) ? console.log('no age is entered or is not a number') : this.age = age;

};

// creates the isDead & isLive function properties for all Person instances
Person.prototype = {
  isDead: function() {return (this.age > 114 || this.age <= 0) ? true : false; },
  isLive: function() {return (this.age > 0 && this.age < 115) ? true : false; }
};