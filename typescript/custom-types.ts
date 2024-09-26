// Introdução
// let myVar: customType;

// function testFn(param: customType): returnedCustomType;

/* Enums */
enum Direction {
  North,
  South,
  East,
  West,
}

let whichWayToArcticOcean: Direction;

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
enum Pet {
  Chinchilla,
  Hamster,
  Rat,
  Tarantula,
}

let petOnSaleTS: Pet = Pet.Chinchilla;
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50],
];

// String enums
enum DirectionString {
  North = 'NORTH',
  South = 'SOUTH',
  East = 'EAST',
  West = 'WEST',
}

enum PetString {
  Chinchilla = 'CHINCHILLA',
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Tarantula = 'TARANTULA',
}

// Object types
let aPerson: { name: string; age: number };

// aPerson = { name: 'Mateus', age: 'asdfasdf' }
// aPerson = { name: 'Mateus', yearsOld: 500 };
aPerson = { name: 'Mateus', age: 21 };

type PersonObjectType = {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
};

function sayHappyBirthdayWithObject(personObject: PersonObjectType) {
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

let birthdayBabies: PersonObjectType[] = [
  { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
  { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
  { name: 'Ava', age: 0, giftWish: '$0.25', success: true },
];

birthdayBabies.forEach(sayHappyBirthdayWithObject);

// Type aliases

type MyString = string;
let myVar: MyString = 'Hi';

type PersonType = { name: string; age: number };
type CompanyType = {
  companyName: string;
  boss: PersonType;
  employees: PersonType[];
  employeeOfTheMonth: PersonType;
  moneyEarned: number;
};

let aCompany: CompanyType;

// Function types
let myFavoriteFunction = console.log;
myFavoriteFunction('Hello world');

type StringsToNumberFunction = (arg0: string, arg1: string) => number;

let myFunc: StringsToNumberFunction;
myFunc = function (firstName: string, lastName: string) {
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

// Add your function type below:

type OperatorFunction = (a: number, b: number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, '!');
  let value25 = operationCallback(2, 5);
  console.log(
    'When we',
    operationCallback.name,
    '2 and 5, we get',
    value25,
    '.'
  );
  console.log(
    'When we',
    operationCallback.name,
    value25,
    'and 7, we get',
    operationCallback(value25, 7),
    '.'
  );
  console.log('Now fill out this worksheet.');
}

// Call your functions below:
mathTutor(multiply);
// mathTutor(wrongAdd);

// Tipos Genéricos
type Family<T> = {
  parents: [T, T];
  mate: T;
  children: T[];
};

let aStringFamily: Family<string> = {
  parents: ['Stern', 'Edith'],
  mate: 'Friend',
  children: ['Mary', 'Siebel', 'Edith'],
};

// Exercício
type Human = { name: string; job: string };
type Dog = { name: string; tailWagSpeed: number };
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4],
  mate: 9,
  children: [5, 30, 121],
};

let someFamily: Family<boolean> = {
  parents: [true, true],
  mate: false,
  children: [false, false, true, true],
};

let aFamily: Family<Human> = {
  parents: [
    { name: 'Mom', job: 'software engineer' },
    { name: 'Dad', job: 'coding engineer' },
  ],
  mate: { name: 'Matesky', job: 'engineering coder' },
  children: [{ name: 'Babesky', job: 'none' }],
};

let anotherFamily: Family<Dog> = {
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
function getFilledArray<T = string>(value: T, n: number): T[] {
  return Array<T>(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: { name: string; age: number }[];

stringArray = getFilledArray('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{ name: string; age: number }>(
  { name: 'M. Queirós', age: 21 },
  6
);
