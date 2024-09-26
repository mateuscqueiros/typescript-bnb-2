"use strict";
// Introdução
// let myVar: customType;
// function testFn(param: customType): returnedCustomType;
/* Enums */
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let whichWayToArcticOcean;
whichWayToArcticOcean = Direction.North;
// whichWayToArcticOcean = Direction.SouthEast;
// whichWayToArcticOcean = West;
let petOnSale = 'chinchilla';
let ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50],
];
// Pet: Chinchilla, Rat, Hamster e Tarantula
var Pet;
(function (Pet) {
    Pet[Pet["Chinchilla"] = 0] = "Chinchilla";
    Pet[Pet["Hamster"] = 1] = "Hamster";
    Pet[Pet["Rat"] = 2] = "Rat";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
let petOnSaleTS = Pet.Chinchilla;
let ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50],
];
// String enums
var DirectionString;
(function (DirectionString) {
    DirectionString["North"] = "NORTH";
    DirectionString["South"] = "SOUTH";
    DirectionString["East"] = "EAST";
    DirectionString["West"] = "WEST";
})(DirectionString || (DirectionString = {}));
var PetString;
(function (PetString) {
    PetString["Chinchilla"] = "CHINCHILLA";
    PetString["Hamster"] = "HAMSTER";
    PetString["Rat"] = "RAT";
    PetString["Tarantula"] = "TARANTULA";
})(PetString || (PetString = {}));
// Object types
let aPerson;
// aPerson = { name: 'Mateus', age: 'asdfasdf' }
// aPerson = { name: 'Mateus', yearsOld: 500 };
aPerson = { name: 'Mateus', age: 21 };
function sayHappyBirthdayWithObject(personObject) {
    let output = '';
    output += 'Happy Birthday ' + personObject.name + '! ';
    output += 'You are now ' + personObject.age + ' years old! ';
    output +=
        'Your birthday wish was to receive ' +
            personObject.giftWish +
            '. And guess what? You will ';
    if (!personObject.success) {
        output += 'not ';
    }
    output += 'receive it! \n';
    console.log(output);
}
let birthdayBabies = [
    { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
    { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
    { name: 'Ava', age: 0, giftWish: '$0.25', success: true },
];
birthdayBabies.forEach(sayHappyBirthdayWithObject);
let myVar = 'Hi';
let aCompany;
// Function types
let myFavoriteFunction = console.log;
myFavoriteFunction('Hello world');
let myFunc;
myFunc = function (firstName, lastName) {
    return firstName.length + lastName.length;
};
// Math Operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function wrongAdd(a, b) {
    return a + b + '';
}
// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
    console.log("Let's learn how to", operationCallback.name, '!');
    let value25 = operationCallback(2, 5);
    console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
    console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
    console.log('Now fill out this worksheet.');
}
// Call your functions below:
mathTutor(multiply);
let aStringFamily = {
    parents: ['Stern', 'Edith'],
    mate: 'Friend',
    children: ['Mary', 'Siebel', 'Edith'],
};
//Do not change the code above this line.
//Provide type annotations for the variables below:
let theFamily = {
    parents: [3, 4],
    mate: 9,
    children: [5, 30, 121],
};
let someFamily = {
    parents: [true, true],
    mate: false,
    children: [false, false, true, true],
};
let aFamily = {
    parents: [
        { name: 'Mom', job: 'software engineer' },
        { name: 'Dad', job: 'coding engineer' },
    ],
    mate: { name: 'Matesky', job: 'engineering coder' },
    children: [{ name: 'Babesky', job: 'none' }],
};
let anotherFamily = {
    parents: [
        { name: 'Momo', tailWagSpeed: 3 },
        { name: 'Dado', tailWagSpeed: 100 },
    ],
    mate: { name: 'Cheems', tailWagSpeed: 7 },
    children: [
        { name: 'Puppin', tailWagSpeed: 0.001 },
        { name: 'Puppenaut', tailWagSpeed: 0.0001 },
        { name: 'Puppenator', tailWagSpeed: 0.01 },
    ],
};
// Funções genéricas
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
stringArray = getFilledArray('hi', 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: 'M. Queirós', age: 21 }, 6);
