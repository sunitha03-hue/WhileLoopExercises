//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startFuel;
let numAstronauts;
let shuttleAltitude=0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');
startFuel = Number(input.question("Enter the starting fuel level: "));
while(startFuel < 5000 || startFuel > 30000)
{
  console.log("*****")
  startFuel = Number (input.question("Invalid input. Please enter number greater than 5000 and less than 30000: "));
}
//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numAstronauts = input.question("Enter the number of astronauts: ");  
while(numAstronauts<0 || numAstronauts>7)
{numAstronauts = input.question('Invalid input. Please enter number from 0 to 7:');}
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while(startFuel > 5000){
startFuel=startFuel-numAstronauts*100;

shuttleAltitude+=50;
}
console.log("Current Fuel Level: ", startFuel);
console.log("Altitude: ", shuttleAltitude);

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”*/
console.log(`"The Shuttle gained an altitude of ${shuttleAltitude} km."`)
/*If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
if(shuttleAltitude>=2000)
{
  console.log("Orbit achieved");
}else
console.log("Failed to reach orbit.");
