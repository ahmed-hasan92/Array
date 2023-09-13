/**

- isArrayLengthOdd(numbers):
- receives array `numbers`
- returns true if array has an odd number of elements
- returns false otherwise
- 
- e.g.
- isArrayLengthOdd([1, 2, 3]) -> true
- isArrayLengthOdd([1, 2, 3, 4]) -> flase
*/
function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 === 0) {
    return false;
  } else return true;
}
let nums = [1, 2, 3];
console.log(isArrayLengthOdd(nums));

/**
  
  - isArrayLengthEven(numbers):
  - receives array `numbers`
  - returns true if array has an even number of elements
  - returns false otherwise
  - 
  - e.g.
  - isArrayLengthEven([1, 2, 3]) -> false
  - isArrayLengthEven([1, 2, 3, 4]) -> true
  */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 === 0) {
    return !false;
  } else return !true;
}
console.log(isArrayLengthEven(nums)); // I uses the variable nums above with the previous question.

/**
  
  - addLailaToArray(instructors):
  - receives array `instructors`
  - returns a new array that's a copy of array `instructors` with additional string "Laila"
  - 
  - e.g.
  - addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
  */
function addLailaToArray(instructors) {
  const instructorsArray = instructors.concat("Laila");

  return instructorsArray;
}
const originalInstructorsArray = ["Mshary, Hasan"];
const updatedArray = addLailaToArray(originalInstructorsArray);
console.log(updatedArray); // Couldn't solve this one!!

/**
  
  - eliminateTeam(teams):
  - receives array `teams`
  - removes the last element from the array and return it
  - 
  - e.g.
  - eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
  */
function eliminateTeam(teams) {
  let lastElement = teams.pop();
  return lastElement;
}
const teamsArray = ["Brazil", "Germany", "Italy"];
const NoLastElement = eliminateTeam(teamsArray);
console.log(NoLastElement);

/**
  
  - secondHalfOfArrayIfItIsEven(fruits):
  - receives array `fruits`
  - returns a new array that's the second half of the original array if it has an even number of elements
  - returns an empty array if it has an odd number of elements
  - 
  - e.g.
  - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
  - secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
  🌶️🌶️🌶️
  */
function secondHalfOfArrayIfItIsEven(fruits) {
  let checkIfItsEven = fruits.length;
  if (checkIfItsEven % 2 === 0) {
    return fruits.slice(fruits.length / 2);
  } else return [];
}
const fruitsContainer = ["apple", "orange", "banana", "kiwi", "Cherry"];
let secondFruitsContainer = secondHalfOfArrayIfItIsEven(fruitsContainer);
console.log(secondFruitsContainer);
/**
  
  - youGottaCalmDown(shout):
  - receives a string `shout`
  - returns the string `shout` with at most one exclamation mark (!) at the end.
  - 
  - e.g.
  - youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
  - youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
  - youGottaCalmDown("Hellooooo") -> "Hellooooo"
  - 
  - Hint:
  - Use number method .indexOf()
  - Use string method .slice()
  🌶️🌶️🌶️
  */
