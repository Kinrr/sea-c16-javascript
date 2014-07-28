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
  var ages = _.pluck(people, 'age');
  ages.sort(function(a, b){return b-a});
  return ages[0];
}

var living = function(people) {
  var eddie = _.map(people, function(person) {
    if (person.age) {
      return person.name;
    }
  })
  var vedder = _.without(eddie, undefined);
  return vedder;
}

var oldestLivingPerson = function(people) {
  var oldestPeople = _.where(people, {age:oldestAge(people)});
  var oldestNames = _.map(oldestPeople, function(person) {
    return person.name;
  })
  return oldestNames[0];
}


console.log(oldestAge(people));
console.log(living(people));
console.log(oldestLivingPerson(people));