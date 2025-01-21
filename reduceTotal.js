import shoppingCart from "./Data/candyData.js";

/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

function totalSavory(arr){
    return shoppingCart.reduce((total, item) => {
        return item.type === "savory" ? total + item.price : total
    }, 0).toFixed(2)
}

console.log(totalSavory(shoppingCart));

