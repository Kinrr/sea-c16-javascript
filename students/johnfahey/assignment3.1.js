var Person = function(name, parent, age) {
    this.name = name;
    this.age = age;
    this.parent = parent;
};

  Person.prototype.isDead = function() {
    if (this.age <= 0 || this.age >= 120 || !this.age){
        console.log('I am so sorry. ' + this.name + ' is dead as a doornail');
        return true;
    }else{
        console.log(this.name + ' is not dead. ' + this.age + ' year old.');
        return false;
    }
  };

  Person.prototype.isAlive = function() {
      if (this.age <= 0 || this.age >= 120 || !this.age){
          console.log(this.name + ' is not alive');
          return false;
      }else{
        console.log(this.name + ' is alive and is' + this.age + ' year(s) old.');
        return true;
      }
  };