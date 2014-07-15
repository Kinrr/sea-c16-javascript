function preferredName (FirstName, LastName) {
	if ((FirstName != undefined && FirstName.length > 0) && (LastName == undefined || LastName == ""))
		return FirstName;
	else if ((LastName != undefined && LastName.length > 0) && (FirstName == undefined || FirstName == ""))
		return LastName;
	else
		return false;
}