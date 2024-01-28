//let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.

//2) Remove the last item from the array with pop. Print the element removed and the updated array.

//3) Remove the first item from the array with shift. Print the element removed and the updated array.

//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.

//5) Use a template literal to print the final array and its length.


function plusTwo(num) {
    return num + 2; 
}

let a = 2; 
for (let i = 0; i < 4; i++) {
    a = plusTwo(a)
}

console.log(a); 

function repeater(str) {
    let repeated = str + str;
    console.log(repeated);
}

repeater('Bob');

function repeater(str) {
    let repeated = str + str;
    console.log(repeated);
}

repeater('Bob');

 

let message = "Hello, World!";

function printMessage(message) {
    console.log(message);
}

printMessage("Goodbye");

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));

let str = "tacocat";
function reverse(str) {
    return str.split('').reverse().join('');
    
}

function isPalindrome(str) {
    return reverse(str) === str;
     
}
console.log(isPalindrome(str));

function plusTwo(num) {
    return num + 2;
}

