// create array of fruits
// create array of fruit prices
// create array of quantity of each fruit sold
// output sales per fruit
// output total sales

let fruits = ["Apples", "Pears", "Oranges", "Lemons"];
let prices = [1.25, 1, 1.50, 1.35];
let quantity = [23, 17, 28, 13];
let total = 0;

for (i = 0; i < fruits.length; i++) {

    let sales = prices[i] * quantity[i]; // created a variable for the sales of fruits as a local scope variable

    console.log(fruits[i], sales);

    total += sales; // assign the sales total to total (global scope variable)
}

console.log(total); // now when you call the global variable "total" it will output the sales total from within the for loop code block, calling it outside the for loop will do a single output at the end of the console output