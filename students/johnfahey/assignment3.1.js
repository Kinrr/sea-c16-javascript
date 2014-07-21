var Person = function (name, parent, age) {
    this.name = name;
    this.age = age;
    this.parent = parent;
};

function verifyAge (age) {
  return age <= 0 || age >= 120 || !age;
}

Person.prototype.isDead = function () {
  return verifyAge(this.age);
};

Person.prototype.isAlive = function () {
  return !verifyAge(this.age);
};