// Instantiates the person object
var Person = function( firstName, lastName, parentName, age) {
	console.log ("Person made with name " + firstName + " " + lastName + ", age " + age);
	this.firstName = firstName;
	this.lastName = lastName;
	this.parentName = name;
	this.age = age;
};

// Returns a person is dead if age is not defined, 0 or above 115.
var isDead = function(Person) {
	console.log ("isDead called" );
	return (!!Person.age) || (Person.age == 0) || (Person.age > 115) ? true: false;
};
