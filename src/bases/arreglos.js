/* Arreglos en javascript [] */

//const arreglo = new Array();
const arreglo = [];

arreglo[0] = 25;
arreglo.push(100)

console.log(arreglo);

const arreglo2 = [...arreglo];
const arreglo3 = [...arreglo, 12,10, 'Daniel'];
const arreglo4 = [12,10, 'Daniel', ...arreglo];

arreglo2.push(15);

console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);

const arreglo5 = arreglo.map(num => num * 2);

console.log(arreglo5);


