var FirstName,LastName;

function preferredName (fName, lName) {
	if ((!!fName && !!lName) || (!fName && !lName))
		return false;
	else
		return (!!fName) ? fName : lName;
}

