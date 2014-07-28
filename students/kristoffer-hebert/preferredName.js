(function () {
    'use strict';

    var preferredName,
        FirstName,
        LastName;

    preferredName = function (FirstName, LastName) {
        if ((FirstName && LastName) || (!FirstName && !LastName)) {
            return false;
        }
        return FirstName || LastName;
    };

}());