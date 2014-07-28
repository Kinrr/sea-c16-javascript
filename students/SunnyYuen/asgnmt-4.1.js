//found '$' can not be used as a delimiter
function makeList(str, delimiter) {
    // pervents an empty array value if the delimiter is @ 0 index of the string
  if (str.indexOf(delimiter) === 0) {str = str.slice(delimiter.length);}
  var array = [];
    //define the delimiter to match
  var found = RegExp(delimiter, 'g');
    // number of times the delimiter is found
  var occurance = (str.match(found)).length;
  for (var i = 0; i < occurance; i++) {
    // match function has a .index property  
    var foundIndex = str.match(delimiter);
    var chunk = str.slice(0, foundIndex.index);
    // slice str @ +length of delimiter to skip over the delimiter
    str = str.slice(foundIndex.index+delimiter.length);
    array.push(chunk);
}
//adds the last chunk if not empty  
if (str !== '') {array.push(str);}
return array;
}