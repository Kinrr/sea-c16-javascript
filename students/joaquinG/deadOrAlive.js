function Person(name, age, parent) {
    this.name = name;
    this.age = age;
    this.parent = parent;
    
    this.sayHi = function() {
        return "Hi I am " + this.name + " " + this.age;
    };
    
    this.isAlive = function() {
        if(this.age < 123) {
            return true;
        } else {
            return isDead();
        }
    };

    this.isDead = function() {
        if(this.age > 123 || this.age < 0) {
            return true;
        }
    };
}
