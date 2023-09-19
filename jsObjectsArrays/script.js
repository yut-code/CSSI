// Learning Objectives
// Write code directly in the JavaScript console and learn core data structures in JavaScript.
// Learn how to store and reference information in arrays and objects to after inputting from the user and afterwards, outputting to the user
// Learn to iterate through array objects incorporating for loops and conditional statements learned previously.
// Use array methods to perform common tasks rather than writing them from scratch themselves.
// Use arrays and objects to organize information in a format that is programmer friendly.

console.log("running");
// part 1, prerequisites
// info about a car
// dont have to define value of variable, just declaring
let make = "";
let model = "";
let year = 0;
let carTitle = "";

//assigning value to variables
make = "Ram";
model= "1500";
year = 2010;

carTitle = year + " " + make + " " + model;

console.log("My car is a", carTitle);

/** OBJECTS */
// these are like dicts/hashmaps

//declaire variable car
let car;
// json = js object notation
// {} denotes creation of an object in JS

car = {
  make: "Ram",
  model: "1500",
  year: 2010
};


console.log(car);
// access properties of an object using dot notation
// CASE SENSITIVE - if you use 
// car.Make -> it will make a new property called Make rather than change the value

car.make = "Toyota";
car.model = "Corolla";
car.year = 1984;
// adding a new property to the object. in js this can be done without declaring it inside of the object
car.tires = 4;

console.log(car);


/** ARRAYS */

// arrays: [], objects: {}
// indices start at 0
let pets = ["cat", "dog", "parrot", "cow", "horse"];

console.log(pets[2]); // accessing 3rd item
pets.push("snake"); // adding item to existing list
//different from .append() in js, which creates a new list with the added item. this is like .append() in python
// to add an item in the middle, use .splice()
// .splice() removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
pets.splice(2, 1, "goose");
// start at index 2 and remove 1 element with str 'goose'


// 
let cowIndex;

for (let i = 0; i < pets.length; i++){
  if (pets[i] === "cow") {
    cowIndex = i;
    break;
  }
}

console.log(cowIndex);

let cowIndex2 = pets.indexOf("cow");
console.log(cowIndex2);

/** OBJECTS WITH ARRAYS */
let tutor1 = {
  name: "Mario",
  subject: "English",
  age: 28,
  students: ["Diana", "Nadeem", "Ben"]
};

tutor1.students.push("Shawn")

console.log(tutor1.students)
console.log(tutor1.students[0])

let tutor2 = {
  name: "Susan",
  subject: "Math",
  age: 22,
  students: ["Henry", "Bill", "Grace"]
}

let tutors = [tutor1, tutor2]
console.log(tutors) // list of 2 objects (it lowkey looks like json)

  
/** ARRAYS WITH OBJECTS */
 let bouquet = [
   { type: "rose", color: "pink", count: 4 },
   { type: "rose", color: "yellow", count: 3 },
   { type: "carnation", color: "pink", count: 4 },
   { type: "delphiniums", color: "purple", count: 7 },
 ];

 console.log(bouquet[1].color);
 // Output 1 - yellow

 console.log(bouquet[3]);
 // Output 2 - Object { type: "delphiniums", color: "purple", count: 7 }

 console.log(bouquet[0].type);
 // Output 3 - rose

 // How would you access the number of carnations?
console.log(bouquet[2].count)

// array iteration
// js: for (let i = 0; i< bouquet.length; i++){
// flower = bouquet[i]
// console.log(flower)}

// for.. of loops
// for of vs for in??
// ANS: Both for..of and for..in statements iterate over lists; the values iterated on are different though, for..in returns a list of keys on the object being iterated, whereas for..of returns a list of values of the numeric properties of the object being iterated.

//eg 
let list = [4, 5, 6];

for (let i in list) {
   console.log(i); // "0", "1", "2",
}

for (let i of list) {
   console.log(i); // "4", "5", "6"
}





/** ARRAY ITERATION */

for (flower of bouquet){
    console.log(flower);
  }
  
  let total = 0
  for (let i = 0; i < bouquet.length; i++){
    if (bouquet[i].type === "carnation"){
      total += bouquet[i].count;
    }
  }
  
  console.log("Total =", total);
    
  
  // challenge

  let unscrambled_words = [];
  let pairings = {};

  const scrambled_numbers = [
    9, 25, 28, 22, 21, 0, 27, 14, 23, 26, 13, 12, 19, 20, 7, 29, 4, 6, 15, 17, 16,
    24, 5, 3, 8, 1, 2, 11, 18, 10,
  ];
  const scrambled_words = [
    "in",
    "and",
    "their",
    "away",
    "mile",
    "Before",
    "have",
    "when",
    "from",
    "you",
    "way",
    "That",
    "are",
    "a",
    "a",
    "shoes.",
    "you",
    "walk",
    "you",
    "them,",
    "criticize",
    "them",
    "should",
    "someone,",
    "mile",
    "you",
    "criticize",
    "shoes.",
    "you",
    "their",
  ];

  scrambled_numbers.forEach((number, numbersIndex)=> {
    pairings[number] = scrambled_words[numbersIndex];
  })
  console.log(pairings)

  unscrambled_words = Object.values(pairings);

//   console.log(pairings)

  /* Your code - Note: save your unscrambled array of words as "unscrambled_words" */
  let secret_message = unscrambled_words.join(" ");
  
  console.log(secret_message);