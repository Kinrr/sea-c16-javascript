(function () {
    'use strict';

    function stringDelimiter(string, seperator) {
        var index, array = [], seperatorLength = seperator.length, term;
        if (string && seperator) {
            while (string && index !== string.length) {
                index = string.indexOf(seperator);
                if (index == -1) {
                    index = string.length;
                }
                term = string.substring(0, index);
                if(term) {
                  array.push(term);
                }
              string = string.substring(index + seperatorLength);
            }
        } else {
            array.push(string);
        }
        return array;
    }
}());