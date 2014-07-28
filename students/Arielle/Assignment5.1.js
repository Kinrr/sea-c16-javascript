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

var eldestAge = function(people) {
   var eldestPerson = _.max(people, function(person) {
     return person.age;
   });
   console.log(eldestPerson.age);
 };

var living = function(people) {
  var livingPeople = _.filter(people, function(withAge) {
    return (!!withAge.age);
  });
  var livingPeopleName = _.pluck(livingPeople, 'name');
  console.log(livingPeopleName);
};

var eldestPerson = function(people) {
  var eldestPersonName = _.max(people, function(personName) {
    return personName.age;
  });
  console.log(eldestPersonName.name);
};

eldestAge(people);
living(people);
eldestPerson(people);
