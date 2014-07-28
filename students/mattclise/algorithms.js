var _ = require('lodash')

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
]

var oldestLivingParent = function(people) {
  var names = _.pluck(people, 'name');
  var parentNames = _.pluck(_.filter(people, 'parent'), 'parent');
  var parents = _.intersection(names, parentNames);
  
  // The three lines above create an array for names, create an array for parents' names,
  // and then compare the two and create another array with the names that are in both the
  // first two.

  var parentArray = _.map(parents, function(par){
    return _.find(people, {'name': par});
  })

  // The above makes an array of all the objects in the person array that are parents. 
  
  var oldest = _.find(parentArray, {'age': _.max(parentArray, 'age').age});
  return oldest.name;

  // Like the lodash assignment before, _.find works the two times above only because there
  // are no repeats in either name or age values in the original data.

}

console.log(oldestLivingParent(people));