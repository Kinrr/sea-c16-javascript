var _ = require('lodash');
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


var oldestAge = function(people) {
	var oldestPerson = _.max(people, function(person) {
		return person.age;
	});
	console.log(oldestPerson.age);
};

var living = function(people) {
	var livingPerson = _.filter(people, function(person) {
		return (person.age !== undefined || "");
	});
	var livingPersonName = _.pluck(livingPerson, "name");
	console.log(livingPersonName);
};

var oldestLivingPerson = function(people) {
	var oldestPerson = _.max(people, function(person) {
		return person.age;
	});
	console.log(oldestPerson.name);
};

oldestAge(people);

living(people);

oldestLivingPerson(people);
