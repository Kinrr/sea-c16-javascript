var preferredName = function(firstName, lastName) {
  if (typeof firstName != "string" || typeof lastName != "string") {
    return console.log("Uh, something's wrong, both inputs should be strings (even if blank).");
  }

  else { 
    return ((!firstName && !lastName) || (!!firstName && !!lastName)) ? false : (firstName || lastName)    
  }
}