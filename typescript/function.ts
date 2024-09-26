// Passando um tipo para o parâmetro
function printLengthOfText(text: string) {
  console.log(text.length);
}

printLengthOfText('Olá mundo');

function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled('Olá!', 5);

// Parâmetros opcionais e valor padrão
function greet(name = 'Anonymous') {
  console.log(`Hello, ${name}!`);
}

greet('Mateus');
greet();

// Tipos de retorno
function createGreeting(name?: string): string | undefined {
  if (name) {
    return `Hello, ${name}`;
  }
  return;
}

const myGreeting = createGreeting('Mateus Queirós');

// void
function logGreeting(name: string): void {
  console.log(`Hello, ${name}!`);
}

const result = logGreeting('Mateus');

// Documentação

// Este é um comentário em linha.
/*
  Este é um comentário em bloco.
*/

/**
 * Este é um comentário de documentação.
 */

/**
 * Returns the sum of two numbers.
 *
 * @param x - The first input number.
 * @param y - The second input number.
 * @returns The sum of `x` and `y`.
 */
function getSum(x: number, y: number): number {
  return x + y;
}

const sum = getSum(1, 2);

/**
 * Functions makes fruit salad
 * @param fruit1 - first fruit
 * @param fruit2 - second fruit
 */
function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit1 + fruit2 + fruit1 + fruit2;

  console.log(salad);
}

/**
 * Proclaims
 * @param status - status that should be proclaimed
 * @param repeat - how many times to proclaim
 */
function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}
