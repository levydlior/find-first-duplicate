function findFirstDuplicate(arr) {
  const numbers = {}

  for (let i = 0; i < arr.length; i++) {
    
    console.log("numbers", numbers);
    if (arr[i] in numbers) {
      return arr[i];
    }
    numbers[arr[i]] = arr[i]
  }
  return -1;
  }

if (require.main === module) {
// add your own tests in here

console.log("expecting: 5");
console.log("=>", findFirstDuplicate([1, 5, 8, 3, 5]));

console.log("Expecting: 3");
console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

console.log("");

console.log("Expecting: -1");
console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
/*
Given an array of number, I need to find if there are duplicates numbers, if there is a duplicate I need to return it.

I can iterate once, make a set and if the number is in the set return it

make new set
iterate on arr
each elemnt in arr becomes a key in new set
if element in new set return element else return -1



*/
// And a written explanation of your solution
