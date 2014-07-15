var Person = function(name, parentName, age) {
  this.name = name;
  this.parentName = parentName;
  this.age = age;
  this.isDead = function () {
    if(!age || age < 0) return true;
    if(age > 0 && age <= 111) return false;
    if(age > 111) return "statistcally speaking, probably"
  }
}

var Larry = new Person("Larry", "Shirley", 40);
console.log("Name: " + Larry.name + ", age: " + Larry.age + ", Parent: " + Larry.parentName + ", is dead: " + Larry.isDead());