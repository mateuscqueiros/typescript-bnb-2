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
let names: string[] = ['Mateus', 'João', 'Ian'];

// Arrays:
let bestNumbers: number[] = [7, 77, 4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[] = [
  'scrambled eggs',
  'oatmeal',
  'tamago kake gohan',
  'any kind of soup',
];
let bestBooleans: boolean[] = [true, false];

// Arrays multi-dimensionais
let matrix: string[][] = [
  ['Neo', 'Trinity'],
  ['Morpheus', 'Smith'],
];

let bestMealPlan: string[][] = [
  bestLunches,
  bestBreakfasts,
  ['baked potato', 'mashed potato'],
];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [
  [[1], [2, 3]],
  [[7], bestNumbers],
];

// Tuples/Tuplas
let ourTuple: [string, number, string, boolean] = [
  'Is',
  7,
  'your favorite number?',
  false,
];

let tup: [string, string] = ['hi', 'bye'];
let arr: string[] = ['there', 'there'];

tup = ['there', 'there'];
// Type error: tup = arr;

let favoriteCoordinates: [number, number, string, number, number, string] = [
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
function smush(firstString: string, ...otherStrings: string[]) {
  let output = firstString;

  for (let i = 0; i < otherStrings.length; i++) {
    output = output.concat(otherStrings[i]);
  }
  return output;
}

smush('a', 'h', 'h', 'h', 'h', 'h', '!', '!');

function addPower(p: string, ...numsToAdd: number[]): number {
  let answer = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    answer += numsToAdd[i] ** p.length;
  }
  return answer;
}

console.log(addPower('a string', 4, 5, 6));
