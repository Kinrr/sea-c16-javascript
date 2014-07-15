 function preferredName (firstName, lastName) {
		if ((!firstName && !lastName) || (firstName && lastName)) {
			return false;
		}
		else {
			return (firstName || lastName);
		}
	};