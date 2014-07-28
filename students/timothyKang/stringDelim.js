var stringArray = [];
var beginArray = 0;
var myString;

var stringDelimiter = function (sampleInput, separator) {
    for (var i = 0; i < sampleInput.length; i++) {
        if (sampleInput.charAt(i) == separator) {
            myString = sampleInput.substring(beginArray,i);
                if (myString !== '') {
                    stringArray.push(myString);
                }
                beginArray = i + 1;
        }
    }
    return stringArray;
};
