var stringDelimiter = function (input, delimiter) {
  var output = [];
  var string = "";
    
  for (var i = 0; i < input.length; i++) {
    if (input[i] === delimiter) {
      if (string !== "") {
          output.push(string);
          string = "";
      }
    } else {
        string += input[i];
    }  
  }
    return output;
};

