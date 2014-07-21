// Write a function that takes in a string seperated by a seperator, and will return an array 
// of strings in between the seperators.

function stringDelimiter(input, delimiter) {
	var output = [];
	var str = "";

	for (var i = 0; i < input.length; i ++) {
		if (input[i] === delimiter) {
            if (str !== "") { //prevents adding an empty string to the output array
                output.push(str);
			    str = "";
            }
		} else {
			str += input[i];
		}
	}
    console.log(output);
    return output;
}

var sampleInput = 'asdf$lskd1234$asdo$$$';
stringDelimiter(sampleInput, '$');
// Expected output: -> ['asdf', 'lskd1234', 'asdo']