function preferredName(firstName, lastName) {
    if(!!firstName === !!lastName) {
        return false;
    } else {
        return firstName || lastName;
    }
}