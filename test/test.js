let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });
    

    it("should return true for a palindrome with mixed case", function() {
      let mixedCase = new Phrase ("RaceCar");
      assert(mixedCase.palindrome());
     });

     it("should return true for a palindrome with punctuation", function() {
         let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
        assert(punctuatedPalindrome.palindrome);
  });
    it("should return true for a non-empty palindrome", function() {
      let emptyString = new Phrase('');
      assert.notStrictEqual(emptyString.palindrome(),"");
     });
  describe("#letters", function () {
    it("should return only letters", function() {
      let punctuatedPalindrome = new Phrase ("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });
    it("should return the empty string on no match", function() {
      let noLetters = new Phrase('1234.54');
      assert.strictEqual(noLetters.letters(), "");
    });
  });
})});
