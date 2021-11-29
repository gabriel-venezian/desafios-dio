/*
  Dividing X by Y
  
  Challenge:
  You will be challenged to write an algorithm that reads 2 numbers and prints
  the result of dividing the first by the second. If it is not possible, show
  the message “division impossible” for the values ​​in question.
  
  Input:
  The input contains an integer N. This will be the number of pairs of
  integer values ​​(X and Y) that will be read next.
  
  Output:
  For each case show the result of the division with one digit after the decimal 
  point, or “impossible division” if it is not possible to perform the calculation.
*/

let limit = parseInt(gets());

for (let i = 0; i < limit; i++) {
  let line = gets().split(" ");
  let X = parseInt(line[0]);
  let Y = parseInt(line[1]);
  
  if (Y == 0) {
    console.log("impossible division");
  } else {
    let division = parseFloat(X / Y).toFixed(1);
    console.log(division);
  };
};
