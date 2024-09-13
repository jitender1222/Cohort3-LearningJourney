/*
  Write a function `findLargestElement` that takes an array of numbers and 
returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let ans=-999999;
    for(let i=0;i<numbers.length;i++){
       if(ans<numbers[i]){
        ans=numbers[i]
       }
    }
    console.log(ans);
}

module.exports = findLargestElement([3,-77777,14,-9,10]);