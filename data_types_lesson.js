//Data types in JavaScript

/*
string 
numbers
arrays
objects
*/

var name = "Bob"; //strings always have quotes

var age = 21; //numbers

var classroom = ["Jon", "Anabel", "Cullen", "Chris"]; //array of 1 index (0), and 4 names (0,1,2,3)

var careerdevs = [
        ["Jon", "Anabel", "Cullen", "Chris"],
        ["Billy", "Bob", "Mo"],
        ["Curly", "Steve", "Larry"]
    ]
    /* array of 3 indexes (0,1,2) and names within the indexes.
       To call specific names (strings) from within an index in an array,
       you must an index from within an index [0][1] to call from
       the second index of the first index
       */
    // index is a numerical count within an array
    // the strings or what you have in an array are the elements

classroom.push("Jeremy");

console.log(classroom);