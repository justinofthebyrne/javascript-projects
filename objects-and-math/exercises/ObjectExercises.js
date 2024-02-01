
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
  
};
superChimpOne["astronautID"] = 1;
superChimpOne["move"] = function () {return Math.floor(Math.random()*11)};
console.log(superChimpOne.move());
console.log(superChimpOne);


let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};
salamander["astronautID"] = 2;
salamander["move"] = function () {return Math.floor(Math.random()*11)};
console.log(salamander.move());

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee", 
   mass: 11,
   age: 6
};
superChimpTwo["astronautID"] = 3;
superChimpTwo["move"] = function () {return Math.floor(Math.random()*11)};
console.log(superChimpTwo.move());

let beagle = {
   name: "Leroy", 
   species: "Dog" ,
   mass: 14,
   age: 5
};

beagle["astronautID"] = 4;
beagle["move"] = function () {return Math.floor(Math.random()*11)};
console.log(beagle.move());

let tardigrade = {
   name: "Almina",
   species: "Tardigrade", 
   mass: 0.001,
   age: 1
}; 

tardigrade["astronautID"] = 5;
tardigrade["move"] = function () {return Math.floor(Math.random()*11)};
console.log(tardigrade.move());

// After you have created the other object literals, add the astronautID property to each one.
// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, salamander, beagle, tardigrade]; 
// console.log(crew); 
// Print out the relevant information about each animal.

// Start an animal race!

/*SO, WE SEE THAT IT DID PRINT THE ANIMAL RACE, BUT IT DID NOT PRINT THE ANIMAL INFO. 
THAT'S BECAUSE WE DIDN'T RUN ANOTHER CONSOLE.LOG(superChimpOne); ETC. -JB*/ 

function crewReports(crew) {
   console.log(`"${name} "is a ${species}. They are ${age} and ${mass} kilograms. Their ID is ${astronautID}"`)
};