var stringDelimiter = function(string, seperator) {
    
    var newString = [];
    var startIndex = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) === seperator) {
            var subString = string.substring(startIndex,i); 
            if (subString !== '') {
                newString.push(subString);            
            }
            startIndex = i + 1;
        }
    }
    return newString;
}
