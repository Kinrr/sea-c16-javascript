var _ = require('lodash');


function oldestAge(people) {
  var old = _.max(people, 'age');
  var newOld = _.omit(old, 'name', 'parent');
  var result = _.values(newOld);
  return parseInt(result, 10);
}



function living(people) {
  var livingPeople = _.filter(people, 'age');
  return _.pluck(livingPeople, 'name');
}



function oldestLivingPerson(people) {
  var old = _.max(people, 'age');
  var newOld = _.omit(old, 'age', 'parent');
  var result = _.values(newOld);
  return result.toString();
}
