
// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  this.letters = function letters() {
    const letterRegEx = /[a-z]/gi;
   return (this.content.match(letterRegEx) || []).join("");
  }
  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    if (this.processedContent()){
    return this.processedContent() === this.processedContent().reverse();
  } else {
    return false; 
  }
}
}
module.exports = Phrase;
