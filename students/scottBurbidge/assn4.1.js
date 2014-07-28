function stringDelimiter(input, delim) {
  this.input = input;
  this.delim = delim;
  this.array = [];
  this.store = [];
    
  for (i = 0; i <= this.input.length; i++) {
    var chk = this.input.charAt(i);
    if(chk !== delim && chk !== '') {
      this.store.push(chk);
    } 
      else {
        var str = this.store.join('');
        this.array.push(str);
        this.store = [];
    }
  }
  return this.array;
};

