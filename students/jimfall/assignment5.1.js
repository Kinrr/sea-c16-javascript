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

// Given the above data structure. Implement
// a function that will return the oldest age.
// Given the above data structure. Implement
// a function that will return the oldest age.
// -> 75

function oldestAge (people){

  var person = _.max(people, function(people){ return people.age; });
  return person.age;

}

var result_age = oldestAge(people);
console.log (oldestAge(people));

// Also given the above data structure. Implement
// a function that will return and array of the names
// of all living people.
// -> ['Hank', 'Danny', 'Deborah', 'Kathy', 'Don']

function living(people){

  var alive = _.filter(people, 'age');
  var alive_name = _.pluck(alive, 'name');
  return alive_name;
}

console.log(living(people));

// Also give then data structure implement a function
// that will return the name of the oldest living person.
// -> 'Kathy'

function oldestLivingPerson(people){

  var person = _.max(people, function(people){ return people.age; });
  return person.name;

}

console.log(oldestLivingPerson(people));
