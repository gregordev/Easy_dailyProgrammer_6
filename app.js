/*
  Name: First Recurring Character
  Inspiration: 
  https://www.reddit.com/r/dailyprogrammer/comments/7cnqtw/20171113_challenge_340_easy_first_recurring/
*/

/*
 Three types of strings to check, works for each one
*/

let string1 = '*l1J?)yn%R[}9~1"=k7]9;0[$'; //element 1 index 2
let string2 = 'PXLJOUDJVZGQHLBHGXIW'; //element J index 3
let string3 = 'IKEUNFUVFV'; //element U index 3
let inputArray = [];
let tempArray = [];


function firstRecurring(input) {
  inputArray = input.split('');
  let i = 0;

  while (!tempArray.includes(inputArray[i])) {
    tempArray.push(inputArray[i]);
    i++;
    
  }
  let index = inputArray.indexOf(inputArray[i]);
  console.log(`element: ${inputArray[i]}`);
  console.log(`index: ${index}`);
  
}
 
firstRecurring(string3);
