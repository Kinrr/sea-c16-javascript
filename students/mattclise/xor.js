var firstName, lastName;

var preferredName = function(FirstName, LastName){
	return (!!FirstName != !!LastName) ? FirstName || LastName : false;
}
