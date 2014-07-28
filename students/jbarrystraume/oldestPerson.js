var _ = require("lodash");

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

var oldest = _.max(people, 'age');

var oldestAge = function(people) {
  return oldest.age;
}

var living = function(people) {
  return _.pluck(_.filter(people, 'age'), 'name');
}

var oldestLivingPerson = function(people) {
  return oldest.name;
}
console.log(oldestAge(people));
console.log(living(people));
console.log(oldestLivingPerson(people));