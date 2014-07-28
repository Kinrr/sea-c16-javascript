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

var oldestAge = function(arr) {
  var ages = _.pluck(arr, "age");
  //takes out all undefined entries in ages using _.where and puts them in a new array
  var onlyExisting = _.where(ages);
  return _.max(onlyExisting);
};

var living = function (arr) {
  var livingPeople = _.where(arr, "age");
  return _.pluck(livingPeople, "name");
};

var oldestLiving = function(arr) {
  return _.pluck(_.where(arr, {age: oldestAge(arr)}), "name").pop();
};
