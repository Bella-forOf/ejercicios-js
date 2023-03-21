'use strict'


// maneras de sumar los numeros de un array. con bucle for, y con reduce, 
// el bucle for of no vale!
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
debugger;
let acc = 0;
for (let i = 0; i < scores.length; i++) {
 acc += scores[i];
console.log('La puntuación final es ' + acc);};


//esta forma no es valida
const scores2 = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
debugger;
let acc2 = 0;
for (const number of scores2) {
 acc2 += scores2[number];
console.log('La puntuación final es ' + acc2);};

// esta forma si es valida
const arr = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
debugger;
const reducer = ( a,b) => a + b;

console.log('La puntuación final es ' + arr.reduce(reducer));