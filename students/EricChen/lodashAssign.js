var _ = require('lodash');

var person = [
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
  
function isAlive(personIn) {
    var aliveArrayOfObject = _.filter(personIn, function(eachObject) {
      resultArrayOfObject = eachObject.age < 115;
      return resultArrayOfObject;
    });
    return aliveArrayOfObject
  };

var people = {
  livingPerson: function(personIn) {
    var livingArrayofObject = isAlive(personIn);
    var livingArrayOfNames = _.map(livingArrayofObject, 'name');
    return livingArrayOfNames;
  },
  
  oldestAge: function(personIn) {
    var oldestAArrayofObject = isAlive(personIn);
    var oldestAObject = _.max(oldestAArrayofObject, 'age');
    return oldestAObject.age;
  },

  oldestPerson: function(personIn) {
    var oldestPArrayofObject = isAlive(personIn);
    var oldestPObject = _.max(oldestPArrayofObject, 'age');
    return oldestPObject.name;
  }
}

console.log(people.livingPerson(person));
console.log(people.oldestAge(person));
console.log(people.oldestPerson(person));
