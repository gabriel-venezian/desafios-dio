/*
  How much cassava?

  Challenge:
  The months of June and July are traditionally known throughout Brazil
  for their typical parties, and for Marlene's group of friends it's no 
  different, every second fortnight of July she and her friends get together 
  for the traditional cassava!

  During the festive period, Chico, Beto, Bernardo, Marina and Iara always 
  get together at Marlene's house. And as it couldn't be different from the 
  main course of this meeting is the manioc.

  Each one comes from one to ten servings of cassava and they always let Marlene 
  know in advance as to how many servings you will eat that day. The portion size 
  of each one is different, but they are always the same. The servings are as follows (in grams):
  - Chico eats 300
  - Bento eats 1500
  - Bernardo eats 600
  - Marina eats 1000
  - Iara eats 150

  Marlene in turn always comes with 225 grams of cassava. Tired of all year having
  to calculate how much cassava to prepare she challenged you to write a program that 
  tells you how much cassava must be prepared in grams.

  Input:
  The input consists of 5 integers each represented as portions that the owner sources
  Chica will consume. The first integer represents the portions of Chico, the second of Bento, 
  the third by Bernardo, fourth by Marina and fifth by Iara.

  Output:
  The output consists of a single integer that represents how much cassava Marlene must 
  prepare in grams.
*/

let chico = 300 * parseInt(gets());
let bento = 1500 * parseInt(gets());
let bernardo = 600 * parseInt(gets());
let marina = 1000 * parseInt(gets());
let iara = 150 * parseInt(gets());
let marlene = 225;
let total = chico + bento + bernardo + marina + iara + marlene;

console.log(total);
