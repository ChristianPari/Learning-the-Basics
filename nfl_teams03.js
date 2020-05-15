// combine arrays into one single array and output them as a list
let nfc = ["NYG", "PHI", "SF", "GB", "MIN"];
let afc = ["NE", "NYJ", "CIN", "KC", "BUF"];

let nfl = [...nfc, ...afc];
for (let i = 0; i < nfl.length; i++) {
    console.log(nfl[i]);
}

let teams = "NFC teams are: " + nfc + "\nAFC teams are: " + afc;
console.log(teams);