var countDecorator = function(fn){
	var count = 0;
	function decorator(){
		count++;
		return fn.apply(this,arguments);
	}
	decorator.callCount = function(){
		return count;
	}
	return decorator;
}
