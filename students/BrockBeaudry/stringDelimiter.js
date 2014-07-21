// Returns false if no matches, otherwise an array of delimited strings.
var stringDelimiter = function(input, delimiter) {

    // Match everything not in the negated character set.
    var regexp = new RegExp('[^' + delimiter + ']+', 'g');

    // Return false instead of null if there are no matches.
    return input.match(regexp) || false;
};