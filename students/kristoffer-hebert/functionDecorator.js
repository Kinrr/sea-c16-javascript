(function () {
    'use strict';

    function Add(x, y) {
        return x + y;
    }
    function countDecorator(func) {
        var newfunc = function () {
            newfunc.add();
            return func.apply(this, arguments);
        };
        newfunc.count = 0;
        newfunc.callCount = function () {
            return this.count;
        };
        newfunc.add = function () {
            newfunc.count++;
        };
        return newfunc;
    }
}());