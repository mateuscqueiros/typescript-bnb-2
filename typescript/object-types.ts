/**
 * Tipos vs Interfaces
 *
 * Types: aceita objetos, primitivos e outros tipos.
 * Interfaces: permitem apenas objetos.
 *
 */
type Mail = {
  postagePrice: number;
  address: string;
};

interface Mail2 {
  postagePrice: number;
  address: string;
}

let catalog: Mail;

interface Run {
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log('Miles left: ', 50 - run.miles);
  console.log('Percent of goal: ', (run.miles / 50) * 100, '% complete');
}

updateRunGoal({
  miles: 5,
});

/**
 * Interfaces e classes
 *
 * Para usar uma interface com uma classe, precisamos da palavra reservada implements.
 */
interface Robot {
  identify: (id: number) => void;
}

class OneSeries implements Robot {
  identify(id: number) {
    console.log('My ID is', id);
  }

  answerQuestion() {
    console.log('42');
  }
}

interface Directory {
  addFile: (name: string) => void;
  showPreview: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log('Adding file:', name);
  }

  showPreview(name: string) {
    console.log('Preview of file:', name);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('notes.txt');
Desktop.showPreview('notes.txt');

/**
 * Tipos aninhados
 *
 * Podemos aninhar outros objetos infinitamente dentro de um tipo, essencialmente criando objetos aninhados em outros.
 */

interface Robot2 {
  about: {
    general: {
      id: number;
      name: string;
    };
  };
  getRobotId: () => string;
}

class OneSeries2 implements Robot2 {
  about;

  constructor(props: { general: { id: number; name: string } }) {
    this.about = props;
  }
  getRobotId() {
    return `ID: ${this.about.general.id}`;
  }
}

/**
 * Tipos compostos
 *
 * Tipos podem conter outros tipos como suas propriedades.
 */

interface About {
  general: General;
}

interface General {
  id: number;
  name: string;
  version: Version;
}

interface Version {
  versionNumber: number;
}

/**
 * Extends
 *
 * Quando precisamos de membros de outros tipos podemos usar extends para "importá-los"
 */
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

const mySquare: Square = { color: 'red', sideLength: 10 };

interface Developer extends Person {
  code: () => void;
}

interface Person {
  name: string;
  hobbies: string[];
}

const me: Developer = {
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina',
  hobbies: ['Building rockets'],
};

me.code();

/**
 * Assinaturas de índices
 *
 * Quando sabemos o formato dos dados, mas não podemos declarar exatamente quais são os seus membros.
 */

const coords: SolarEclipse = {
  '40.12323453546': true,
  '40.1239943543': true,
  '40.23452345': false,
};

interface SolarEclipse {
  [latitude: string]: boolean;
}

interface Budget {
  [item: string]: number;
}

function getResult(): Budget {
  return {
    '1.shopping': 150,
    '2.food': 210,
    '3.utilities': 100,
  };
}

function getBudget() {
  const result: Budget = getResult();
  console.log(result);
}

getBudget();

/**
 * Membros opcionais
 */

interface OptionsType {
  name: string;
  size?: string;
}

function listFile(options: OptionsType) {
  let fileName = options.name;

  if (options.size) {
    fileName = `${fileName}: ${options.size}`;
  }

  return fileName;
}

interface UserNameOptions {
  firstName?: string;
  lastName?: string;
  userName: string;
}

function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.userName);
}

getUserName({
  firstName: 'Mr.',
  lastName: 'Oshiro',
  userName: 'hotelowner304',
});

getUserName({
  firstName: 'Madeline',
  userName: 'mountainClimber',
});
