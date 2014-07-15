function preferredName (FirstName, LastName) {
	if (!FirstName && !LastName) {
		return false;
	} else if (FirstName && !LastName) {
		return FirstName;
	} else if (FirstName && LastName) {
		return false;
	} else if (!FirstName && LastName){
		return LastName;
	}
}
