// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ___ AS INPUT AND RETURNS ___ AS OUTPUT //////

// #1
// Input: an array of numbers
// Output: the sum of the numbers that were passed in
// Edge Case: If the array is empty, return 0
var sumOfNums = function(numsArray){
  var sum = 0;
  for (var i = 0; i < numsArray.length; i++) {
    sum += numsArray[i];
  }
  return sum;
};

// #2
// Input: an array of numbers
// Output: an array of the numbers from the first array that are strictly
//         greater (i.e. greater than but not equal to) than 10
var numsGreaterThanTen = function(numsArray){
  var results = [];
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      results.push(numsArray[i]);
    }
  }
  return results;
  }
  

// #3
// Input: an array of numbers
// Output: `true` if ALL numbers passed in are strictly greater than 10;
//         `false` otherwise
// Edge Case: If the input array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray) {
  var results = [];
  for (var i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      return true;
    }
    else if (numsArray[i] < 10) {
      return false;
    }
    else {
      return results;
    }
  }
};

// #4
// Input: an array of words
// Output: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  var words = [];
  for (var i = 0; i < words.length; i++) {
    if (words.length[i] >= 5) {
      results.push(words[i]);
    }
  }
  return words;
};

// #5
// Input: an array of words
// Output: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  for (var i = 0; i < words.length; i++) {
    if (!(words[i].charAt(0) === "a" || words[i].charAt(0) === "A")) {
      return false;
    }
  }
  return true;
};

// #6
// Input: an array of words
// Output: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  for (var i = 0; i < words.length; i++) {
    if (words[i].charAt(0) === "b" || words[i].charAt(0) === "B") {
      return true;
    }
  }
  return false;
};

// #7
// Input: a single word and a number (`n`)
// Output: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n) {
  if (n < 0) {
    return null;
  }
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var count = 0;
  for (var i = 0; i < word.length; i++) {
    if (vowels[i].charAt(i) === word[i]) {
    } else if (count > 0) {
      return true;
    }
    else {
      return false;
    }
  }
};

// #8
// Input: an array of words
// Output: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].indexOf(vowels) > 2) {
      count.push(words[i])
    }
  }
};

// #9
// Input: an array of words
// Output: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  for (var i = 0; i < words.length; i++) {
    if (!(words[i].charAt(i) === "a" || words[i].charAt(0) === "A" || words[i].charAt(0) === "e" || words[i].charAt(0) === "E" || words[i].charAt(0) === "i" || words[i].charAt(0) === "I" || words[i].charAt(0) === "o" || words[i].charAt(0) === "O" || words[i].charAt(0) === "u" || words[i].charAt(0) === "U")) {
      return false;
    }
  }
  return true;
};

// #10
// Input: an array of words
// Output: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  // Your Code Here
};

// #11
// Input: an array of words
// Output: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  // Your Code Here
};

// #12
// Input: an array of words
// Output: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { cat: 3, horse: 5, elephant: 8}
var buildObjectFromWords = function(words){
  // Your Code Here
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
