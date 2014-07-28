function stringDelimiter(string, seperator) {
	var arr = []
	var final = [];
	var start = 0;
	for(i = 0; i < string.length; i++) {
		if(string.charAt(i) === seperator) {
			arr.push(string.slice(start, i));
			start = i + 1;
		}
	}
	if(string.charAt(string.length-1) !== seperator)
		arr.push(string.slice(start, i));
	while(arr.length) {
		var str = arr.shift();
		if (str.length)
			final.push(str);
	}
	return console.log(final);
}

var sampleInput = 'asdf$lskd1234$asdo$$$'; 
stringDelimiter(sampleInput, '$');