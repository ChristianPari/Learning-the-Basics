// use the various character escapes and console.log them to see their outputs

// the single and double quote escapes ( \' \" )
let quotes1 = "Hello, my name is \"Christian\".";
let quotes2 = 'Hi Christian! My name is \'Steve\'.';
console.log(quotes1);
console.log(quotes2);
// can also use both single and double quotes to minimize use of escaping
let quotes3 = 'Hi Christian and Steve, my name is "Hector".';
console.log(quotes3);

// the newline escape ( \n )
let newline = "\nWelcome to the Olympic Games. \nI am your host, Christian.";
console.log(newline);
/*
by putting \n at the beginning of the string, it will separate it from the other console.log
outputs by leaving a blank line in between the outputs. Then the second \n will make the rest of
the string be output on the line below the first half of the string
*/

/* other string escapes are: 
\\ to insert a backslash
\b to backspace
\v (vertical tab) STILL UNSURE HOW THIS ONE WORKS
*/