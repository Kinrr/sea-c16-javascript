var test_ = require ('lodash');

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

//We're going through all the objects in our collection and finding the one
//with the maximum 'age:' property - because .max returns the entire object
//we must log only the attriute we want to see. Note we use the _.pluck
//shorthand but understand a function is being called to return the age.

oldestAge = function(people) {
  var oldAge = test_.max(people, 'age');
  console.log(oldAge.age);
};

//We filter the array of objects to include only those with a 'true' value
//for 'age:' - then we pull and log only the 'name:' attribute for those
//objects

living = function(people) {
  var livingPeople = test_.filter(people, 'age');
  var livingPeoplePluck = test_.pluck(livingPeople, 'name');
  console.log(livingPeoplePluck);
};

//Same as oldestAge above we're just returning a different property 'name:'
//of the object with the oldest age

oldestlivingPerson = function(people){
    var oldestPerson = test_.max(people, 'age');
    console.log(oldestPerson.name);

}
