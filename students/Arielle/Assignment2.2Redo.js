var firstName;
var lastName;

var preferredName = function(firstName, lastName) {
	if (!firstName && !lastName || firstName && lastName) {
		return false;
	}	
	else if (!firstName) {
		return lastName;
	}

	else {
		return firstName;
	}
}