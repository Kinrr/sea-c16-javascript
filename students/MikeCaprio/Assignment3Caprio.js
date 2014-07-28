
var sampleInput = "asdf$lskd1234$asdo$$$";

var stringDelimiter = function (text, delimiter) {

  var solutionArray = [];
  var index = 0;
  for (i = 0; i <= text.length; i++) {

    if (text.charAt(index) === delimiter){
      index += 1;
    }

    else if (text.charAt(i) === delimiter) {
      solutionArray.push(text.slice(index,i));
      index = i+1;
      }

//New addition - now checks to see if the end of the string is reached and if so pushes
//the last slice of text into the array - since the string may not always end in a
//delimiter
  
    else if (i===text.length) {
      solutionArray.push(text.slice(index,i));
    }
  }

  console.log(solutionArray);
}
