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

function oldestAge(people) {
  return _.max(people, 'age').age;
}

function living(people) {
 var ages = _.filter(people, function(persons) {return persons.age >= 0});
 return _.pluck(ages, 'name');
}

function oldestLivingPerson(people) {
  return _.max(people, 'age').name;
}

