// Returns the age of the oldest person.
function oldestAge(people) {
     return _.max(people, 'age').age;
}

// Returns an array with the names of all living people.
function living(people) {
    return _.chain(people)
        .filter(function(person) { return person.age >= 0; })
        .pluck('name')
        .value();   
}

// Returns the name of the oldest living person.
function oldestLivingPerson(people) {
    return _.max(people, 'age').name;   
}