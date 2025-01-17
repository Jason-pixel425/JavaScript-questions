/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/


const panic = (str) => {
    const strArr = str.split(' ');
    if (strArr.length < 2) {
        strArr.push("!")
        const uppercaseStr = strArr.join("").toUpperCase()
        return uppercaseStr
    } else {
       const panicArr = strArr.map((word, index) => {
            if (index === strArr.length - 1){
                return `${word.toUpperCase()}!`
            }
            return `${word.toUpperCase()} 😱`
        })
        return panicArr.join(" ")
    }
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
console.log(panic("banana"))

