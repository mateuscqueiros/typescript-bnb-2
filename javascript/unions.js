"use strict";
/**
 * Introdução
 *
 * O TS nos permite definir de forma específica ou geral, qual o tipo de nossas variáveis. Porém, e quando precisamos de um meio termo?
 */
let something = 'something';
let something2 = 'something';
/**
 * Definir uma união
 */
let ID;
ID = 1;
ID = '001';
console.log(`The ID is ${ID}.`);
function getMarginLeft(margin) {
    return { marginLeft: margin };
}
function printNumsAndStrings(statement) {
    console.log(`LOG:: ${statement}`);
}
printNumsAndStrings('hello!');
/**
 * Type guards
 */
function getMarginLeft2(margin) {
    if (typeof margin === 'string') {
        return margin.toLowerCase();
    }
}
function formatValue(value) {
    if (typeof value === 'string') {
        value.toLowerCase();
    }
    if (typeof value === 'number') {
        value.toFixed(2);
    }
}
formatValue('Hi!');
formatValue(42);
function play(sport) {
    if ('serve' in sport) {
        return sport.serve();
    }
    if ('kick' in sport) {
        return sport.kick();
    }
}
const siameseCat = {
    name: 'Proxie',
    run: () => 'pitter pat',
};
function move(pet) {
    if ('run' in pet)
        return pet.run();
    if ('swim' in pet)
        return pet.swim();
}
console.log(move(siameseCat));
/**
 * else
 */
function formatPadding(padding) {
    if (typeof padding === 'string') {
        return padding.toLowerCase();
    }
    else {
        return `${padding}px`;
    }
}
formatPadding(32);
formatPadding('0 32px');
const fettuccine = {
    menuName: 'Fettuccine',
    boil: () => 'Heat water to 212 degrees',
};
const steak = {
    menuName: 'New York Strip Steak',
    panFry: () => 'Heat oil to 350 degrees',
};
function prepareEntree(entree) {
    if ('boil' in entree) {
        return entree.boil();
    }
    else {
        entree.panFry();
    }
}
console.log(prepareEntree(fettuccine));
function brew(beverage) {
    if ('steep' in beverage)
        return beverage.steep();
    beverage.pourOver();
}
const iron = {
    magnetize: () => 'Electromagnet activated',
};
const bottle = {
    melt: () => 'Furnace set to 2,700 degrees',
};
function recycle(trash) {
    if ('melt' in trash)
        return trash.melt();
    return trash.magnetize();
}
console.log(recycle(iron));
function getBookFromServer() {
    return {
        id: 1,
        title: 'Sherlock Holmes',
    };
}
function getBook() {
    try {
        return getBookFromServer();
    }
    catch (error) {
        return `Something went wrong: ${error}`;
    }
}
/**
 * Uniões e arrays
 */
const dateNumber = new Date().getTime();
const dateString = new Date().toString();
const timesList = [dateNumber, dateString];
/**
 * Valores comuns aos membros
 */
const batteryStatus = false;
batteryStatus.toString();
function changeLight(color) {
    console.log(color);
}
function downloadStatus(status) {
    if (status === 'idle')
        console.log('Dowload');
    if (status === 'downloading')
        console.log('Dowloading...');
    if (status === 'complete')
        console.log('Dowload finished');
}
downloadStatus('idle');
downloadStatus('downloading');
downloadStatus('complete');
