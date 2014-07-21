// Implement a decorator function that takes 
// a function as an argument and will track
// how many times the passed function was called.

function Add(x, y) {
  return x + y;
}

function countDecorator(f) {
	var count = 0;

	function increaseCount() {
		count++;
		return f.apply(null,arguments);
        //call add().apply with the passed arguments
	}

	increaseCount.callCount = function() {
        console.log("The passed function has been called this many times: " + count);
		return count;
	};

	return increaseCount;
}

var Add = countDecorator(Add);
Add(1, 1);
Add.callCount();
Add(2, 2);
Add.callCount();

/* credit for my solution belongs largely to these sites:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

http://stackoverflow.com/questions/7676768/call-apply-method-with-arguments-in-javascript

http://lostechies.com/jimmybogard/2009/01/20/javascript-decorator-pattern/

*/