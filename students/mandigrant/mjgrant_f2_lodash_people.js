
/* Uses lodash library functions to return the oldestAge, a list of living people, and the name of the oldest person.*/

var _ = require ('lodash');

var people = [
  {
    name: 'Hank',
    age: 29,
    parent: 'Don'
  },
  {
    name: 'Deborah',
    age: 30,
    parent: 'Don'
  },
  {
    name: 'Danny',
    age: 24,
    parent: 'Don'
  },
  {
    name: 'Don',
    age: 64,
    parent: 'Haskell'
  },
  {
    name: 'Kathy',
    age: 75,
    parent: 'Lenora'
  },
  {
    name: 'Haskell',
    parent: 'Finus'
  },
  {
    name: 'Finus'
  }
];

oldestAge = function(people) {
	var highestAge = _.max(people, function(person){return person.age;});
	console.log("Oldest age:"); 
	console.log(highestAge.age); //print just the age property's value
};

living = function(people) {
  var livingPeopleList = _.filter(people, 'age'); //grab only the people with an age property
	var livingPeopleNames = _.pluck(livingPeopleList, 'name'); //now get their names
	console.log("Living people:");
	console.log(livingPeopleNames);
};

oldestLivingPerson = function(people) {
	var oldestPerson = _.max(people, function(person){return person.age;});
	console.log("Oldest living person:");
	console.log(oldestPerson.name);
};

oldestAge(people);
// Expected: 75

living(people);
// Expected: ['Hank', 'Danny', 'Deborah', 'Kathy', 'Don']

oldestLivingPerson(people);
// Expected: 'Kathy'