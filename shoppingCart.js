import shoppingCart from "./Data/candyData.js";

/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

// There are some issues with toFixed. I won't pretend to understand it but it should be noted that toFixed should not be used if 
// accuarcy to the last decimal place is required 

function total(arr){
    const total = arr.reduce((total, item) => {
        return total + item.price
    }, 0)

    return total.toFixed(2)
}

console.log(total(shoppingCart));
