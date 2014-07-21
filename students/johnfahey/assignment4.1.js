var sampleInput = 'asdf$lskd1234$asdo$$$';


function stringDelimiter (str, char){
    var arr =[];
    var start=0;
    var el;
    for(var i=0;i < str.length; i++){
        if (str.charAt(i) === '$'){
            el = str.substring(start,i);
            if (el !== ''){
                arr.push( el );
            }
            start = i+1;
        }
    }
    return arr;
}

stringDelimiter(sampleInput, '$');


