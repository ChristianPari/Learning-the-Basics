// create an array to output months of the year backwards

let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
for (i = 11; i >= 0; i--) {
    console.log(months[i]);
}
/*
in the for loop you set i to equal index 11 which is Dec, then instead of setting the code block to run until i is less than the length of the array months, we set it to stop running once i is greater than and equal to index 0 so that it will include our first index Jan in the output. Then we make i decrement from 11 down to 0 which will output Dec - Jan
*/