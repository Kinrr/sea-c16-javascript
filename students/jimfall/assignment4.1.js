var stringDelimiter = function (sampleInput, delimiter) {

	var stringArray = [];
	var j = 0;

	for (var i = 0; i < sampleInput.length; i++) {

		if (sampleInput.charAt(i) == delimiter) {
			j++;
		} else {
			if (!stringArray[j]) stringArray[j] = '';
			stringArray[j] += sampleInput.charAt(i);
		}
	}
	for (var k = stringArray.length; k >= 0; k-- ) {
		if (stringArray[k] === undefined) {
			stringArray.splice(k, 1);
		}
	}

	return stringArray;
}