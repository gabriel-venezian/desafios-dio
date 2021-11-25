/*
  Going to the fair

  Challenge:
  You are at the fair with your bag and stopped at a stall. The marketer handed 
  him yellow and red peppers. Now we're going to add the yellow and red peppers 
  together to find the total number of peppers in the bag. You will receive 2 integers 
  which must be read and stored in variables A (yellow peppers) and B (red peppers). 
  Add the sum of A and B by assigning their result to the variable X (total peppers).

  Input:
  The input contains 2 integer values, separated by a space.
  
  Output:
  Print the message "X = " (with the letter X being capitalized) followed by the value 
  of the variable X and the end of the line. Make sure there is a space before and after 
  the equal sign.
*/

let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt (line [1]);
let total = A + B;

console.log("X = " + total);
