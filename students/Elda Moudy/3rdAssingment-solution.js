var sampleInput = 'asdf$lskd1234$asdo$$$';

function stringDelimiter(sampleString, separator) {
	var word = [];
	var finalWord = [];
	for (var i = 0; i < 19; i++) {
		if (sampleString[i] != separator) {
			word.push(sampleInput[i]);
		}	else {
			var newWord = word.join("");
			finalWord.push(newWord);
			word = [];
			while (word.length > 0 ) {
				word.pop();
			};
		};
	};
	console.log(finalWord);
};

stringDelimiter(sampleInput, '$');