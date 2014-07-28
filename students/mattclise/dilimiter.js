var stringDelimiter = function(inputString, separator){
	var strng = inputString;
	var separateArray = [];
	while (strng.length > 0) {
		var firstSep = strng.indexOf(separator);
		if (firstSep != 0){
			separateArray.push(strng.slice(0, firstSep));
		};
		strng = strng.slice(firstSep+1);
	};
	return separateArray;
};