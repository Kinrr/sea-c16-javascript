    var firstName, lastName;
    var preferredName = function(firstName, lastName) {
        if (!firstName && !lastName) {
            return false;
        }
        if (firstName && lastName) {
            return false;
        }
        return firstName || lastName;
    };