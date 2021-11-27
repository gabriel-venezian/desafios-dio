/*
  Even numbers

  Challenge:
  Create a program that reads a number and shows the even numbers up to that number itself.

  Input:
  You will receive an integer value N, where N > 0.

  Output:
  Display all even numbers up to the input value, one on each line.
*/

let n = parseInt(gets());

for (let i = 2; i <= n; i+=2) {
  console.log(i);
}
