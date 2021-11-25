/*
  Distance

  Challenge:
  Two motorcycles (X and Y) depart in the same direction. Bike X goes with speed
  constant speed of 60 km/h and the Y bike leaves with a constant speed of 90 km/h.

  In one hour (60 minutes) the bike Y manages to distance itself 30 kilometers from 
  the bike X, that is, it manages to move away one kilometer every 2 minutes.

  Your challenge is to read the distance (in km) and calculate how long it takes 
  (in minutes) for the Y bike to take that distance from the other bike.

  Input:
  The input file contains an integer K representing the amount of
  kilometer that the bike Y must be of the bike X.

  Output:
  Print the time needed for the Y bike to get the kilometers quantity of bike X, 
  followed by the message "minutes".
*/

let kilometers = parseInt(gets());
let minutes = kilometers * 2;

console.log(minutes + "minutes");
