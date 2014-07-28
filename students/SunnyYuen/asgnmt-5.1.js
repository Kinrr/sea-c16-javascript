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

function oldestAge(dataSet) {
  var haveAge, oldAge;
  //filter out the person(s) with undefined age 
  haveAge = _.reject(dataSet, {'age': undefined});
  oldAge = _.max(haveAge, function(chr) {return chr.age;});
  return oldAge.age;
 }

function living(dataSet) {
  var haveAge, livingName;
  //filter out the person(s) with undefined age 
  haveAge = _.reject(dataSet, {'age': undefined});
  livingName = _.map(haveAge, 'name');
  return livingName;
}

function oldestLivingPerson(dataSet) {
  var haveAge, oldPerson;
  //filter out the person(s) with undefined age 
  haveAge = _.reject(dataSet, {'age': undefined});
  oldPerson = _.max(haveAge, function(chr) {return chr.age;});
  return oldPerson.name;
}
