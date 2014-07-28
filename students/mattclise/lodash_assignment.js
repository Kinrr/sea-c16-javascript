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
  return _.max(people, 'age').age;
}

var living = function(people) {
  return _.pluck(_.filter(people, 'age'), 'name');
}

var oldestLivingPerson = function(people) {
  var oldest = _.find(people, {'age': _.max(_.pluck(people, 'age'))});
  return oldest.name;
}

// The _.find method only works in the oldestLivingPerson function because there
// is only one person who is the oldest age.  To get an array with all the names
// of the people that are all the oldest age listed, I would use the following:
//
//  var oldest = _.where(people, {'age': _.max(_.pluck(people, 'age'))});
//  return _.map(oldest, function(old){return old.name})

console.log(oldestAge(people))
console.log(living(people))
console.log(oldestLivingPerson(people))