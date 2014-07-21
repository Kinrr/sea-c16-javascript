
var countDecorator = function(funct) {
    var tally = 0; 
    function decWrap() {
        tally++;
        return funct.apply(this, arguments);
    }
    decWrap.callCount = function() {
      return tally;
    }
    return decWrap;
};
