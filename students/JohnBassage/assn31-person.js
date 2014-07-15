var Person = function(name, parentName, age) {
    this.name = name;
    this.parentName = parentName;
    this.age = age;
    this.isDead = function() {
        if (this.age > 0 && this.age < 115){
            return false;
        } else {
            return true;
        }
    };
};