function preferredName (FirstName, LastName) {
    if (!!(FirstName && LastName) || (!FirstName && !LastName)) {
      return false;
    }
    else {
      return (FirstName || LastName);
    }
}

