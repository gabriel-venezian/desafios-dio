/* 
  Simple sum

  Challenge:
  Read two integer values ​​identified as variables ​​A and B. Calculate a sum between them and call 
  this variable SUM. Then write the value of this variable.
  
  Input:
  The input file contains 2 integer values.
  
  Output:
  Print the SUM variable in all capital letters, specifying a blank space before and after the equals 
  symbol, followed by the value corresponding to the sum of A and B.
*/

let A = parseInt(gets());
let B = parseInt(gets());
let SUM = A + B; 

print("SUM = " + SUM);
