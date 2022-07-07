function isPalindrome(word) {
  let splitWord = word.split('')
  let revWordArray = splitWord.reverse()
  let invertedWord = revWordArray.join('')
  if (word === invertedWord){
    return true
  }
  else { return false}
  // Write your algorithm here
}

/* 
  Add your pseudocode here
  // take a string. invert string; split each letter into array and
  reverse array? 
      if inverted string === string then return true
      else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
