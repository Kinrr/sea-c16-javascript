//function that returns the oldest age
var oldestAge = function (people) {
  return _.max(people, 'age').age;
};

//function that returns an array of the names 
//of all living people
var living = function (people) {
  return _.chain(people)
  .filter('age')
  .map(function(chr){ return chr.name;})
  .value();
};

//function that returns the name of the oldest living person
var oldestLivingPerson = function (people) {
  return _.max(people, 'age').name;
};



