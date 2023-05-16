/* Funciones en javascript */

//Funcion declarada
function mensaje(){
    return 'Hola mundo'
}

//funcion expresada
const suma = function(num1, num2){
    return num1 + num2;
}

//Funcion de flecha - Arrow Function
const suma2 = (num1, num2) => num1 + num2


console.log(mensaje());
console.log(suma(1,2));
console.log(suma2(2,4));

//objeto
const mensaje2 = () => ({
     id: 1,
     nick: 'admin'
})

console.log(mensaje2());