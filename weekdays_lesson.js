//create an array for the days of the week and output the "third" day
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/* for ( statement 1; statement 2; statement 3){}
statement 1: initialize = declaring the iterator, starting number variable (where you're starting)
statement 2: conditional = executes the code-block until false (where you want to end), tells the loop how long it will iterate/repeat
statement 3: incremental = the variable increments in the code-block (how you're getting there)
*/
//make the out be Tuesday through Friday
for (var i = 2; i <= 5; i++) { //states i=tueday, runs until hits friday, includes friday in output bc of <= making it end and include friday
    console.log(weekDays[i]);
}