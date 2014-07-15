var FirstName, LastName;

var preferredName = function (FirstName,LastName) {
  if ((FirstName && LastName) || (!FirstName && !LastName)){
  return false;
  } else {
  return FirstName || LastName;
  }
}
 
//example from class
var preferredName1 = function (FirstName,LastName) {
  return (!FirstName == !LastName) ? false : (FirstName || LastName);
}

console.log(preferredName('joe','elsey'));