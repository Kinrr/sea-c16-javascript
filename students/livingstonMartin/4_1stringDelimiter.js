stringDelimiter = function(input, chopPoint) {
	var array = [], outputStr = ""; 
	for(i = 0; i <= input.length; i++) {
		if (input[i] !== chopPoint && i !== input.length) {
			outputStr += input[i];
			}
		else {
			array.push(outputStr);
			outputStr = "";
		}
	}
	return array;
}