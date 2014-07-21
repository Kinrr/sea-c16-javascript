var Person = function(name, parentName, age) {
	this.name = name;
	this.parentName = parentName;
	this.age = age;
	this.isDead = function(){
		return (!!this.age && this.age < 115) ? false : true;
	}
}




// var items = things.length;
// for (var i = 0; i < items i++) {
// 	items[i]
// };