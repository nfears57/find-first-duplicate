function findFirstDuplicate(arr) {
  // type your code here
  // With the array given, find the first value that comes up more than once
  // return that number
  // if there isn't any duplicates, return -1
  // arr1 = [2,1,3,3,2] 2 duplicates, 3 is first
  // arr2 = [1,2,3,4] no duplicates, -1
  // first time a number repeats ex: input [1,2,2,3,4,4] output 2
  // create an 
  // iterate through the array using for(let i < arr.length, i == 0 i++)
  // Create an object to keep track of the values that have been seen
  const seen = {};

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    // Get the current value
    const value = arr[i];

    // If the value has been seen before, return it
    if (seen[value]) {
      return value;
    }

    // Otherwise, mark the value as seen
    seen[value] = true;
  }

  // If no duplicates were found, return -1
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
