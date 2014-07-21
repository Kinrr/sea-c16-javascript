/** 

CF-Javascript Foundations class 
Create a classification of an object that describes a person in Javascript. 
It's constructor should take a name, parent name, and an age. 
The object should have a #isDead method which returns a boolean based on if the age is valid or not.

var Person = function(name) {
    this.name = name;
  }

**/


// Constructor function of a person
var person = function(name, parent, age) {
	this.name = name;
	this.parentsName = parent;
	this.age = age;
// Function (method) to calculate if age is valid or not.
	this.isDead = function() {
		// assuming no person alive could be 115 years old or older, nor younger than or equal in age to 0.
		if(this.age >= 115 || this.age <= 0) { 
			return true;
		}
		else {
			return false;
		}
	};
};




