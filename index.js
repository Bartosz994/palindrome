String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}


// function reverse(string) {
//     return Array.from(string).reverse().join("");
//   }

//   console.log(reverse("the quick 🦊 rrr"))

  // function palindrome(string) {
  //   let processedContent = string.toLowerCase();
  //   return processedContent === reverse(processedContent);
  // }

  function emailParts(email) {
    return email.toLowerCase().split("@");
  }

console.log(emailParts("bartosz.to@op.pl")); 


// function Phrase(content) {
//   this.content = content;
//   this.palindrome = function palindrome() {
//     let processedContent = this.content.toLowerCase();
//     return processedContent === reverse(processedContent);
//   }


//By filling in the code in Listing 7.3, add a louder method to the Phrase object that returns a LOUDER (all-caps) version of the content. Confirm in the REPL that the result appears as in Listing 7.4.

// function Phrase(content) {
//   this.content = content;
//   this.louder = function() {
//     let processedContent = this.content.toUpperCase();
//     return processedContent
//   };

//   function TranslatedPhrase(content, translation) {
//     this.content = content;
//     this.translation = translation;
//   }
// }
//   TranslatedPhrase.prototype = new Phrase();


function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
        return string.toLowerCase();
  }
  this.processedContent = function  () {
    return this.processor(this.content);
  }
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}


function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
   }
}

TranslatedPhrase.prototype = new Phrase();