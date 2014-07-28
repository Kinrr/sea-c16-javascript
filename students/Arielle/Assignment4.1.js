var input = 'asdf$lskd1234$asdo$$$';
var stringDelimiter = function(inputString, cut) {
	var array = [];
	var outPutString = "";
	var i = 0;
	while (i < inputString.length) {
		i++;
		if (inputString[i] === cut) {
			if (!!outPutString) {
				array.push(outPutString);
				outPutString = "";
			}
		}
		else {
			outPutString += inputString[i];
		}
	}	
	console.log(array);
}

stringDelimiter(input, "$");