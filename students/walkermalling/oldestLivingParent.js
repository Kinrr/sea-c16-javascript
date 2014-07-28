var oldestLivingParent = function(set){
	console.time('timer');
	var oldest = {
		age:0
	};
	for (var i = 0; i < set.length; i++) {
		if( isLivingParent(set, set[i].name ) ){
			if( set[i].age > oldest.age){
				oldest = set[i];
			}
		}
	}
	console.timeEnd('timer');
	return oldest;
};

var isLivingParent = function(set,name){
	for (var i = 0; i < set.length; i++) {
		if( !!set[i].age && set[i].parent === name ) return true
	}
	return false;
};
