(function () {
    'use strict';

    var Person;

    Person = function (first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    };

    Person.prototype.isDead = function () {
        return (this.age && (this.age < 115) && (this.age > 0)) ? false : true;
    };

}());