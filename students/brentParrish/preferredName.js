
var preferredName = function(FirstName, LastName) {
    if (FirstName && !LastName) {
		return FirstName
	}
	else if (LastName && !FirstName) {
		return LastName
	}
	else { return false};

	}

