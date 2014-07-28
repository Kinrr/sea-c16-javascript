(function () {
    'use strict';
    function oldestAge(people) {
        var result;
        result = _.max(people, function (person) {
            return person.age;
        });
        return result.age;
    }

    function living(people) {
        var result;
        result = _.filter(people, function(person){
            return person.age;
        });
        result = _.map(result, 'name');
        return result;
    }
    function oldestLivingPerson(people) {
        var result;
        result = living(people);
        result = _.max(people, function (person) {
            return person.age;
        });
        return result.name;
    }
}());