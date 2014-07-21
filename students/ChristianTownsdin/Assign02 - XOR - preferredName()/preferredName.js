// this function implements XOR
function preferredName(firstName, lastName){	
	if (firstName && !lastName){ return firstName }
	else if (!firstName && lastName){ return lastName }
	else return false;
};
