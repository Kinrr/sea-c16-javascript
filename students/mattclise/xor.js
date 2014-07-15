var firstName, lastName;

var preferredName = function(FirstName, LastName){
	return (!!FirstName != !!LastName) ? FirstName || LastName : false;
}

/*
Before going and looking for help I came up with the answer below.  After
seeing some other submissions, I looked up the ternary operator "?" and 
used it above.

var preferredName = function(FirstName, LastName){
	if ((FirstName && !LastName) || (!FirstName && LastName)){
		return FirstName || LastName;
	}
	else {
		return false
	}
}
*/