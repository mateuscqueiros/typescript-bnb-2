"use strict";
let catalog;
function updateRunGoal(run) {
    console.log('Miles left: ', 50 - run.miles);
    console.log('Percent of goal: ', (run.miles / 50) * 100, '% complete');
}
updateRunGoal({
    miles: 5,
});
class OneSeries {
    identify(id) {
        console.log('My ID is', id);
    }
    answerQuestion() {
        console.log('42');
    }
}
class DesktopDirectory {
    addFile(name) {
        console.log('Adding file:', name);
    }
    showPreview(name) {
        console.log('Preview of file:', name);
    }
}
const Desktop = new DesktopDirectory();
Desktop.addFile('notes.txt');
Desktop.showPreview('notes.txt');
class OneSeries2 {
    constructor(props) {
        this.about = props;
    }
    getRobotId() {
        return `ID: ${this.about.general.id}`;
    }
}
const mySquare = { color: 'red', sideLength: 10 };
const me = {
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
const coords = {
    '40.12323453546': true,
    '40.1239943543': true,
    '40.23452345': false,
};
function getResult() {
    return {
        '1.shopping': 150,
        '2.food': 210,
        '3.utilities': 100,
    };
}
function getBudget() {
    const result = getResult();
    console.log(result);
}
getBudget();
