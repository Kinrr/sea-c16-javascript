var preferredName = function(fName, lName) {
	return !!fName === !!lName ? false : fName || lName;
}