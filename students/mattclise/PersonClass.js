var Person = function (name, parent, age) {
	this.name = name;
	this.parent = parent;
	this.isDead = function(){
		return (!!age);
	};
	this.isAlive = function(){
		return (!(age < 0) && !(age > 115));
	};
};

// The isDead method just checks to see if an age has been entered at all.
// The isAlive method checks the entered age to see if it is within limits.