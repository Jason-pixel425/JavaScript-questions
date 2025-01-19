/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

// function countChars(str){
//    const countObj = {}
//    const removedSpacesStr = str.replace(/\s/g, '').toLowerCase();
//    removedSpacesStr.split('').map(letter => {
//         countObj[letter] ? countObj[letter] += 1 : countObj[letter] = 1
//    })
//    return countObj
// }


// This was me trying to get it as optimal as possible. The first attempt was entirelly my own
// This attempt was after researching and understanding the reduce method more.
// It is more efficient as it does not unncessarily create an array, object etc just to be unused 

function countChars(str){
    return str.replace(/\s/g, '').toLowerCase().split('').reduce((countObj, letter) => {
        countObj[letter] = (countObj[letter] || 0) + 1;
        return countObj;
    }, {});
 }

console.log(countChars("Jason Michael Fitzgerald"));