var stringDelim = function(str, delim) {
    var output = new Array();
    output[0] = "";
    var stringNum = 0;
    for (var i in str) {
        if (str[i] != delim){
            output[stringNum]+=str[i];
        } else {
            stringNum += 1;
            output[stringNum] = "";
        }
    }
    return output
}