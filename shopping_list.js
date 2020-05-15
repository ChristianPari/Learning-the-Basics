// create an array that displays my shopping list
let shopList = ["Bread", "Milk", "Butter", "Fudge-Rounds"]; // there is 4 index (counted 0-3), with 4 elements (groceire strings)

console.log("My shopping list:"); // list title

for (let i = 0; i < shopList.length; i++) {
    console.log(shopList[i]);
}

/* line 6: creates a for loop that creates a new variable i. I then assigned i to have the index 0 which equals "Bread".
           Then i declare that i is less than the length of the array shopList, which will cause the loop to stop once
           i has gone through the loop 4 (length of shopList) times. i++ tells the loop to continue putting the variable
           i back into the loop, increasing it by 1 each time.

   line 7: calling the array with console.log() and putting our first array (shopList) as the first output, and then by
           putting i in brackets within the log it outputs the array data in list form without qoutation marks ("").
*/