//Work in progress.

var delimiter = function(input,limit) {
  var output = input.split(limit);
  var newoutput = output.filter(Boolean);
  console.log(newoutput);
}

delimiter('asdf$lskd1234$asdo$$$','$');