// // function reverse(str) {
// //    let lettersArray = str.split('');
// //    let reversedLettersArray = lettersArray.reverse();
// //    return reversedLettersArray.join('');
// // }

// let nums = [3.14, 42, 4811]; 

// let halved = nums.map(function (n) {
//    return n/2
// });

// console.log(halved);

// let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// let firstInitials = names.map(function (str) {
//    return str[0]
// });

// console.log(firstInitials);

// let fileLogger = function(msg) {

//    // Put the message in a file
// }

// let consoleLogger = function(msg) {

//    console.log(msg);
// }

// function logError(msg, loggers) {

//    let errorMsg = 'ERROR: ' + msg;

//    for (let i = 0; i < loggers.length; i++) {
//    loggers[i](errorMsg);
//    }
// }

// logError('Something broke!', [fileLogger, consoleLogger]);

// function callMe(func) {
//    func();
// }

// callMe("Al");

let array1 = ["B", "A", "I", "I", "B"];
// function removeI(array1) {
//    if (arr.indexOf('i') !== -1){
//       return array1[0];
//       //return final array
//    //end recursion
//    } else {

//    }
// };
// console.log(array1);

// function combineEntries(array1){
//    if (array1.length <= 1){
//        return array1[0];
//    } else {
//        //call combineEntries again
//    }
// }
// console.log(array1);

// function removeI(arr) {
//    if (!arr.includes('i')){
//    //return final array
//    //end recursion
//    console.log('if statement ran');
//    console.log(arr)
//    return arr;
//    } else {
//    //remove one 'i' entry from array
//    //call removeI function again
//    console.log('else statement ran');
//    arr.splice(arr.indexOf('i'),1);
//    console.log(arr);
//    removeI(arr);
//    }
// };

// // let letterArray = ['a', 'b', 'i', 'c', 'd', 'i'];


// // console.log(removeI(letterArray))

// array1 = ['L', 'C', '1', '0', '1']

// function combineEntries(array1){
//    if (array1.length <= 1){
//        return array1[0];
//    } else {
//        return array1[0]+combineEntries(array1.slice(1));
//    }
// }
// console.log(array1[0]+combineEntries(array1.slice(1)));
// //I took what was in the book and then I put that into the console.log to print it.
// let integer = 5
// function decreasingSum(integer) {
//    if (integer != 1){
//    return integer;
//    } else {
//       return decreasingSum(integer-1);
//    //call decreasingSum function again
//    }
// }
// console.log(decreasingSum(integer-1));

const input = require('readline-sync');
let userInput = input.question("Please enter a number:");
let logger = function(errorMsg) {
  console.log("ERROR: " + errorMsg);
};
if (userInput < 0) {
   return ("Invalid input");
}

// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.