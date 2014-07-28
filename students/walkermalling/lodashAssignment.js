/**
 * Get a subset of the collection given a filter key
 *
 * @param  collection   the colleciton of people
 * @param  filter       the desired key to filter for
 * @return {array}
 */
var filterPeople = function(collection, filter){
    return _.filter(collection,function(record){
        return !!record[filter];
    });
};

/**
 * Get the record of the oldest person in a collection
 * @param  collection   the colleciton of people
 * @return {object}
 */
var oldestPerson = function(collection){
    // filter out records with no age
    var peopleWithAges = filterPeople(collection,'age');

    // find record with oldest age
    var oldest = _.max(peopleWithAges,function(record){
        return record.age;
    });

    return oldest;
};

/**
 * return the oldest age in a collection
 */
var oldestAge = function(collection){
    return oldestPerson(collection).age;
};

/**
 * return an array of the names of the living people
 * in a given collection
 */
var livingPeople = function(collection){
    // filter out people with no age
    var living = filterPeople(collection,'age');
    // get their names
    return _.pluck(living,'name');
};

/**
 * return the name of the oldest person
 * in a given collection
 */
var oldestLivingPerson = function(collection){
    return oldestPerson(collection).name;
};
