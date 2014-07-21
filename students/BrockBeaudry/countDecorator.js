function countDecorator(fn) {
    var count = 0;

    var counter = function(a, b) {
        count++;

        return fn.apply(null, arguments);
    };

    counter.callCount = function() {
        return count;
    };

    return counter;
}