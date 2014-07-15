function preferredName (firstName, lastName) {
  if(!firstName === !lastName) {
  return false;
  } else if (!firstName || !lastName) {
      return firstName || lastName;
  } else {
      return false;
  }
  
  {
  
  } 
};

console.log("If first name and last name are given return : " + 
preferredName("Joaquin", "Guardado"));

console.log("If a first name or a last name is given then return first name: " + 
preferredName("Joaquin", ""));

console.log("If a first name or a last name is given then return last name: " + 
preferredName("", "Guardado"));

console.log("If there are no names given then return: " + preferredName("",""));
