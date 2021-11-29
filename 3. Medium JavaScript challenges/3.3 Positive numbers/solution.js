/*
  Positive numbers

  Challenge:
  Create a program that reads 6 values, which can be negative and/or positive. 
  Then present the number of positive values ​​entered.

  Input:
  You will receive six values, negative and/or positive.

  Output:
  Display a message saying how many positive values ​​were read. Don't forget to include 
  the suffix "positive values" in the output message.
*/

let positiveNumbersQuantity = 0;

for (let i = 0; i < 6; i++) {

  const inputValue = gets();

  if (inputValue > 0) {
    positiveNumbersQuantity++;
  }

}

console.log(`${positiveNumbersQuantity} positive values`);
