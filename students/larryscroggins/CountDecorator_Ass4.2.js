function Add(x, y) {
  return x + y;
}

function countDecorator(anyFunction) {
  var count = 0;
  var counter = function(arg1, arg2) {
    count++;
    return anyFunction.apply(null, arguments);
  }
  
  counter.callCount = function() {
    return count;
  }
  return counter;
}