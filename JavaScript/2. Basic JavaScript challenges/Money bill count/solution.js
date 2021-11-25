/*
  Money bill count

  Challenge:
  Read an integer value. Then calculate the smallest possible number 
  of notes (money bills) where the value can be decomposed. The grades 
  you should consider are 100, 50, 20, 10, 5, 2 and 1. Then show the value 
  read followed by the amount of bills needed.

  Input:
  You will receive an integer value N (0 < N < 1000000).

  Output:
  Display the value read and the minimum amount of bills of each type. The 
  end of the line must be printed after each line.
*/

let n = parseInt(gets());
let billQuantity = 0;
let moneyBills = [100,50,20,10,5,2,1];

function billCount(value){
  billQuantity = parseInt(n/value);

  n -= billQuantity * value;

  console.log(`${billQuantity} bills of U$ ${value},00`);
};

console.log(n);

for(let moneyBill in moneyBills){
    billCount(moneyBills[moneyBill]);
};
