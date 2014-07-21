var myString = "I$like$strings$!$They're$nifty.$$$$$"

var stringDelimiter = function(stringName, delimiter) {
	var resultArray = [];
	while (stringName.indexOf(delimiter) > -1) {
		var sliceHere = stringName.indexOf(delimiter);
		var pushString = stringName.slice(0, sliceHere);
		if (pushString != "") {
			resultArray.push(pushString);			
		}
		stringName = stringName.slice((sliceHere + 1), stringName.length);
	}
	console.log(resultArray);
}

stringDelimiter(myString, "$");