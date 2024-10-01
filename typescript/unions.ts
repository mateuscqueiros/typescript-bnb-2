/**
 * Introdução
 *
 * O TS nos permite definir de forma específica ou geral, qual o tipo de nossas variáveis. Porém, e quando precisamos de um meio termo?
 */

let something: string = 'something';

let something2: any = 'something';

/**
 * Definir uma união
 */

let ID: string | number;
ID = 1;
ID = '001';

console.log(`The ID is ${ID}.`);

function getMarginLeft(margin: string | number) {
  return { marginLeft: margin };
}

function printNumsAndStrings(statement: string | number) {
  console.log(`LOG:: ${statement}`);
}

printNumsAndStrings('hello!');

/**
 * Type guards
 */

function getMarginLeft2(margin: string | number) {
  if (typeof margin === 'string') {
    return margin.toLowerCase();
  }
}

function formatValue(value: string | number) {
  if (typeof value === 'string') {
    value.toLowerCase();
  }
  if (typeof value === 'number') {
    value.toFixed(2);
  }
}

formatValue('Hi!');
formatValue(42);

/**
 * Type guards em funções
 */

type Tennis = {
  serve: () => void;
};

type Soccer = {
  kick: () => void;
};

function play(sport: Tennis | Soccer) {
  if ('serve' in sport) {
    return sport.serve();
  }
  if ('kick' in sport) {
    return sport.kick();
  }
}

type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: 'Proxie',
  run: () => 'pitter pat',
};

type bettaFish = {
  name: 'Neptune';
  swim: () => 'bubble blub';
};

function move(pet: Cat | Fish) {
  if ('run' in pet) return pet.run();
  if ('swim' in pet) return pet.swim();
}

console.log(move(siameseCat));

/**
 * else
 */
function formatPadding(padding: string | number) {
  if (typeof padding === 'string') {
    return padding.toLowerCase();
  } else {
    return `${padding}px`;
  }
}

formatPadding(32);
formatPadding('0 32px');

type Pasta = {
  menuName: string;
  boil: () => string;
};

type Meat = {
  menuName: string;
  panFry: () => string;
};

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees',
};

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees',
};

function prepareEntree(entree: Pasta | Meat) {
  if ('boil' in entree) {
    return entree.boil();
  } else {
    entree.panFry();
  }
}

console.log(prepareEntree(fettuccine));

/**
 * Estreitando após um type guard
 */

type Tea = {
  steep: () => string;
};

type Coffee = {
  pourOver: () => string;
};

function brew(beverage: Coffee | Tea) {
  if ('steep' in beverage) return beverage.steep();

  beverage.pourOver();
}

type Metal = {
  magnetize: () => string;
};

type Glass = {
  melt: () => string;
};

const iron = {
  magnetize: () => 'Electromagnet activated',
};

const bottle = {
  melt: () => 'Furnace set to 2,700 degrees',
};

function recycle(trash: Metal | Glass) {
  if ('melt' in trash) return trash.melt();

  return trash.magnetize();
}

console.log(recycle(iron));

/**
 * Inferindo uniões no retorno
 *
 * A função getBook assume o valor de uma união em seu retorno. Pois pode ser uma mensagem de erro ou um objeto Book.
 */
type Book = {
  id: number;
  title: string;
};

function getBookFromServer(): Book {
  return {
    id: 1,
    title: 'Sherlock Holmes',
  };
}

function getBook() {
  try {
    return getBookFromServer();
  } catch (error) {
    return `Something went wrong: ${error}`;
  }
}

/**
 * Uniões e arrays
 */

const dateNumber = new Date().getTime();
const dateString = new Date().toString();

const timesList: (string | number)[] = [dateNumber, dateString];

/**
 * Valores comuns aos membros
 */

const batteryStatus: boolean | number = false;

batteryStatus.toString();
// batteryStatus.toFixed(2);

type Goose = {
  isPettable: boolean;
  hasFeathers: boolean;
  canThwartAPicnic: boolean;
};

type Moose = {
  isPettable: boolean;
  hasHoofs: boolean;
};

// const pettingZooAnimal: Goose | Moose = { isPettable: true };

// console.log(pettingZooAnimal.isPettable);
// console.log(pettingZooAnimal.hasHoofs);

type Color = 'green' | 'yellow' | 'red';

function changeLight(color: Color) {
  console.log(color);
}

// idle, downloading ou complete
type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status) {
  if (status === 'idle') console.log('Dowload');
  if (status === 'downloading') console.log('Dowloading...');
  if (status === 'complete') console.log('Dowload finished');
}

downloadStatus('idle');
downloadStatus('downloading');
downloadStatus('complete');
