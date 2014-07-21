var sampleInput;
var stringSeparator;
var array = [];

stringDelimiter = function(sampleInput, stringSeparator) {
  var match;
  var len = sampleInput.length;
  for (i = 0; i <= len; i++) {
    if (sampleInput.charAt(i) === stringSeparator) {
      var static = i;
      var arrElement = sampleInput.substring(match, i);
      if (arrElement !== "") {
        array.push(arrElement);
      }
      match = static + 1;
    }
  }
  if (sampleInput.charAt(len) != stringSeparator) {
    array.push(sampleInput.substring(match, len));
  }
  return array;
}