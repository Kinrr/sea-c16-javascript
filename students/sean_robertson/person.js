var Person = function(name, parentName, age) {
    this.name = name;
    this.parentName = parentName;
    this.age = age;
}

Person.prototype = {
    
    isDead: function() {
        return (!this.age || this.age > 115) ? true : false;
    },
    
    isAlive: function() {
        return (this.age < 115 && this.age) ? true : false;
    }
    
};