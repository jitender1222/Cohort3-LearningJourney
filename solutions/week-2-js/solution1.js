/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false 
  if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters 
  of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let st1= str1.toLowerCase().split("").sort().join("")
    let st2= str2.toLowerCase().split("").sort().join("")

    if(st1==st2){
        console.log("string are anagrams");
        return;
    }
    console.log("NOt anagrams")


}

module.exports = isAnagram("rasp","spasssr");