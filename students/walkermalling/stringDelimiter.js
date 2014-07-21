var stringDelimiter = function(string, delimiter){
	// construct
	var string = typeof string === "string" ? string : false;
	var delimiter = delimiter || ' ';

	// validate
	if( !string ) throw new UserException("NoStringToDelimit");

	arr = [];

	// delimit
	var conductor = {
		collection : '',
		add: function(char){
			if(char===delimiter || !char) this.dump();
			else this.collection += char;
		},
		dump: function(){
			arr.push(this.collection);
			this.collection = '';
		}
	}

	for(var k = 0; k <= string.length; k++){
		conductor.add(string[k]);
	}

	return arr;
}
