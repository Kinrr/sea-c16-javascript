var firstName, lastName;

function preferredName(firstName, lastName) {
  if (firstName && !lastName) {
    return firstName;
  } else if (!firstName && lastName) {
    return lastName;
  } else {
    return false;
  }
};