function Person(name, pLN, age) {
	this.name = name;
	this.pLN = pLN;
	this.age = age;
	this.deadOrAlive = function() {
		if (age === 0) {
			return "You have not yet been born.";
		}
		else if (age >= 120) {
			return "That's impossible. You cannot be that old!";
		}
		else{
			return "Your name is " + name + ", you are " + age + " years old, and your parent's name is " + pLN + ".";
		}
	}
	this.hasInputAge = function() {
		return !!age;
		
	}
}

joe = new Person("Joe", "Blair", 26);
joe.deadOrAlive();
joe.hasInputAge();