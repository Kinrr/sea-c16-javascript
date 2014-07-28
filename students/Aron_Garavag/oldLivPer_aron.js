
var topNum = _.max(data, 'age');

var oldestAge = function (data) {
  return topNum.age;
};

var living = function (data) {
  var ageObjs = _.filter(data, 'age');
    return _.pluck(ageObjs, 'name');
};

var oldestLivingPerson = function (data) {
  return topNum.name;
};
