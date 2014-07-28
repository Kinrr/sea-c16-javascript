var sampleInput = 'asdf$lskd1234$asdo$$$';

var stringDelimiter = function(stringInput, delimiter) {
  var outputArr = [];

  while(stringInput.indexOf(delimiter) > -1) {
    var sliceHere = stringInput.indexOf(delimiter);
    var pushThis = stringInput.slice(0, sliceHere);
    if (pushThis !== "") outputArr.push(pushThis);
    stringInput = stringInput.slice((sliceHere + 1), stringInput.length);
  }

  return outputArr;
}
stringDelimiter(sampleInput, "$");
