let nums = [3.14, 42, 4811];

let halved = nums.map(function (n) {
    return n/2
});

console.log(halved);

function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 300);