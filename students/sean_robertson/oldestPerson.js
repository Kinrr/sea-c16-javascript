// Create the cunstructor
var People = function(array) {
    this.people = array;
}

// Alter the prototype to include methods: #oldestPerson, #livingPeople, #oldestAge
People.prototype = {
    
    oldestPerson: function () {
        var currentAge = 0;
        var oldestPerson;
        for (var i = 0; i < this.people.length; i++) {
            if (this.people[i].age) {
                var person = this.people[i].name;
                var age = this.people[i].age;
                if (age > currentAge) {
                    currentAge = age;
                    oldestPerson = person;
                }
            }
        }
        return oldestPerson;
    },
    
    livingPeople: function () {
        var livingPeople = [];
        for (var i = 0; i < this.people.length; i++) {
            if (this.people[i].age) {
                livingPeople.push(this.people[i].name);
            }
        }
        return livingPeople;
    },
    
    oldestAge: function () {
        
        var oldestAge = 0;
        for (var i = 0; i < this.people.length; i++) {
            if (this.people[i].age) {
                var age = this.people[i].age;
                if (age > oldestAge) {
                    oldestAge = age;
                }
            }
        }
        return oldestAge;
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
var group = new People(people);

group.oldestPerson();
group.livingPeople();
group.oldestAge();