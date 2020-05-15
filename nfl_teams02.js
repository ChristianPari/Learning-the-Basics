// create an array that lists nfl teams by thier conference
let nflTeams = ["NY Giants", "DA Cowboys", "NE Patriots", "NY Jets"];

console.log("NFC teams:")
for (let n = 0; n < 2; n++) {
    console.log(nflTeams[n]);
}

console.log("\nAFC teams:")
for (let a = 2; a < nflTeams.length; a++) {
    console.log(nflTeams[a]);
}