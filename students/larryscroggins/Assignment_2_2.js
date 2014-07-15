var FirstName, LastName;
var preferredName = function () {
  if(FirstName && LastName) return false;
  if(!FirstName && !LastName) return false;
  return FirstName || LastName;
}

preferredName(FirstName, LastName);
console.log(preferredName());
// -> false

FirstName = 'Hank';

preferredName(FirstName, LastName);
console.log(preferredName());
// -> 'Hank'

LastName = 'Yates';

preferredName(FirstName, LastName);
console.log(preferredName());
// -> false

FirstName = '';

preferredName(FirstName, LastName);
console.log(preferredName());
// -> 'Yates'