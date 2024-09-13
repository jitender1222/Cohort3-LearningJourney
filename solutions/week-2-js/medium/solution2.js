/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

    let str1=str.toLowerCase();
    let str2= str.toLowerCase().split("").reverse().join("");

    for(let i=0;i<str.length;i++){
        if(str1[i]!=str2[i]){  
        console.log("not a palimndrome");
        return
        }
    }

    console.log("palindrome");
  }
  
  module.exports = isPalindrome("aba");