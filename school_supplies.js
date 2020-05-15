// create 2 arrays with yours and your friends school supply list
let myBackpack = ["Notebook", "Pencils"];
let tylersBackpack = ["Binder", "Sharpener"];

console.log("Our school supplies include:\n"); // i used \n (new line) to give a small seperation before the lists began

console.log("My items:"); // puts a string before my listed array as a title

for (let i = 0; i < myBackpack.length; i++) {
    console.log(myBackpack[i]);
} // outputs my list first

console.log("\nTyler's items:"); // same as previous EXCEPT i used \n (new line) to give a small seperation in the lists

for (let a = 0; a < tylersBackpack.length; a++) {
    console.log(tylersBackpack[a]);
} // outputs tyler's list right after mine

console.log("\nWe decided to combine our backpacks into one! \nHere's the outcome:")
let ourBackpack = "A " + myBackpack[0] + ", some " + myBackpack[1] + "," + " a " + tylersBackpack[0] + " and a " + tylersBackpack[1] + ".";
console.log(ourBackpack);