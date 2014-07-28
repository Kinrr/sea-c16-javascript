function Add(x, y) {
  return x + y;
}

var countDecorator = function(func){
	var count = 0;
		
	var tally = function(){
		count++;
		return func.apply(null, arguments);
	};

	tally.callCount = function(){
		return count;
	};

	return tally;
};

var Add = countDecorator(Add);