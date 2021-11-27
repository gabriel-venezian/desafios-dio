/*
  Payroll

  Challenge:
  We need to know how much a certain company must pay its employees, but we 
  only have the amount of hours worked and the hourly value. Write a program 
  that reads an employee's number, their number of hours worked, the amount they 
  receive per hour, and calculates that employee's salary. Then present the employee's 
  number and salary, with two decimal places.
  
  Input:
  You will receive 2 integers and 1 number with two decimal places, representing the number, 
  amount of hours worked and the amount the employee receives per hour worked.

  Output:
  Display the employee's number and salary with a blank space before and after the equality sign. 
  In the case of salary, there must also be a blank space after the $.
*/

let value1 = parseInt(gets());
let value2 = parseInt(gets());
let value3 = parseFloat(gets());
let salary = parseFloat(value2 * value3).toFixed(2);

console.log(`NUMBER = ${value1}`);
console.log(`SALARY = U$ ${salary}`);
