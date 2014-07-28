var input = 'asdf$lskd1234$asdo$$r';
var stringDelimiter = function(inputString, cut) {
	var array = [];
	var outPutString = "";
	var i = -1;
	while (i <= inputString.length) {
		i++;
		if (inputString[i] !== cut && i !== inputString.length) {
			if (!!inputString[i]) {
				outPutString += inputString[i];
			}
		}	
		else {
			array.push(outPutString);
			outPutString = "";
		}
	}		
	return array;
}

stringDelimiter(input, "$");