// Check that the namespace isn't already defined
var model = model || {};

model.Person = function(name, parentName, age) {

    // Enforce new with self-invoking constructor
    if (!(this instanceof model.Person))
        return new model.Person(name);

    this.name = name;
    this.parentName = parentName;
    this.age = age;
};

// True if age is outside the range 0-120, undefined, or null.
model.Person.prototype.isDead = function() {
    return !(model.utils.isValidAge(this.age));
};

model.Person.prototype.toString = function() {
    return 'Name: ' + this.name + ' | Age: ' + this.age + ' | Parent: ' + 
        this.parentName + ' | isDead: ' + this.isDead();
};

// Namespace for helper functions
model.utils = {};

// True if age is a number and in the range of 0-120.
model.utils.isValidAge = function(age) {
    return model.utils.isNumber(age) ? (age >= 0 && age <= 120) : false;
};

// True if a number or numeric string.
model.utils.isNumber = function(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

