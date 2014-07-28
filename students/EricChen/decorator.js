 function Add(x , y) {
    return x + y;
  }

  function countDecorator(fun) {
    var count = [];

    function wrapper () {
      count.push(arguments); 
      return fun.apply(this, arguments);
    }

    wrapper.callCount = function() {
      return (count.length);
    };

    return wrapper;
  }

  var add = countDecorator(Add);
  
  console.log(add(1,1));
  console.log(add(2,2));
  console.log(add(3,3));
  console.log(add(4,4));
  console.log(add.callCount());