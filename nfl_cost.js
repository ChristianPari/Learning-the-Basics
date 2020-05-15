// new let array named rank, rank is from 10 down to 1, with 10 being highest
// new let variable named ticket cost, base ticket cost is $100
// output team name, rank * ticket cost

// Creat an array that lists favorite NFL teams
let teams = ["New York Giants", "Miami Dolphins", "New England Patriots", "Detroit Lions"]; // a variable with nfl teams

let rank = [2, 1, 4, 3]; // a variable with team ranks corresponding to their order within the teams array

let ticketcost = 100; // cost per ticket

console.log("Here is a list of my favorite NFL teams by rank and ticket cost: \n"); //outputs to user

for (let i = 0; i < teams.length; i++) {
    console.log(teams[i], "$" + rank[i] * ticketcost); // makes the for loop for variable i cycle through each array in the console.log
}