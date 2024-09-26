"use strict";
// Introdução
let customersArray = [
    'Custy Stomer',
    'C. Oostomar',
    'CUS Tomer',
    34534534,
    'Custo mer',
    234242,
    'Custopher Ustomer',
];
function checkCustomersArray(arr) {
    arr.map((el) => {
        if (typeof el !== 'string') {
            console.log(`Type error: ${el} should be a string!`);
        }
    });
}
function stringPush(val) {
    if (typeof val === 'string') {
        customersArray.push(val);
    }
}
stringPush('string');
// Anotando tipos de um array
let names = ['Mateus', 'João', 'Ian'];
// Arrays:
let bestNumbers = [7, 77, 4];
let bestLunches = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts = [
    'scrambled eggs',
    'oatmeal',
    'tamago kake gohan',
    'any kind of soup',
];
let bestBooleans = [true, false];
// Arrays multi-dimensionais
let matrix = [
    ['Neo', 'Trinity'],
    ['Morpheus', 'Smith'],
];
let bestMealPlan = [
    bestLunches,
    bestBreakfasts,
    ['baked potato', 'mashed potato'],
];
let bestBooleansTwice = [bestBooleans, bestBooleans];
let numbersMulti = [
    [[1], [2, 3]],
    [[7], bestNumbers],
];
// Tuples/Tuplas
let ourTuple = [
    'Is',
    7,
    'your favorite number?',
    false,
];
let tup = ['hi', 'bye'];
let arr = ['there', 'there'];
tup = ['there', 'there'];
// Type error: tup = arr;
let favoriteCoordinates = [
    40,
    43.2,
    'N',
    73,
    59.8,
    'W',
];
// Inferência de tipos
let examAnswers = [true, false, false];
// Parâmetros Rest
function smush(firstString, ...otherStrings) {
    let output = firstString;
    for (let i = 0; i < otherStrings.length; i++) {
        output = output.concat(otherStrings[i]);
    }
    return output;
}
smush('a', 'h', 'h', 'h', 'h', 'h', '!', '!');
function addPower(p, ...numsToAdd) {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        answer += numsToAdd[i] ** p.length;
    }
    return answer;
}
console.log(addPower('a string', 4, 5, 6));
