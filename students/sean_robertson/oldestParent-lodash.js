// Create the cunstructor
var People = function(array) {
    this.people = array;
}

// Alter the prototype to include methods: #oldestPerson, #livingPeople, #oldestAge
People.prototype = {
    
    oldestPerson: function () {
        var living = _.filter(this.people, 'age');
        return _.last(_.sortBy(living, 'age')).name;
    },
    
    livingPeople: function () {
        return _.compact(_.map(this.people, function(people) { 
            if (!people.age) {
                return;
            } else {
                return people.name;
            }
        }));
    },
    
    oldestAge: function () {
        var living = _.filter(this.people, 'age');
        return _.last(_.sortBy(living, 'age')).age;
    }
    
};

// Array of people to pass in to constructor
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

// Create new People object
group = new People(people);