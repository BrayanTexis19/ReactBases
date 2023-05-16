//Desestructuración de arreglos

const personajes = ['Goku', 'Vegeta', 'Gohan', 'Krilin', ['goten, trunks']];

console.log(personajes[0]);

const [,,, p2] = personajes;

console.log(p2);

const arreglo = () => {
    return ['ASBCD', 1234]
}

const [ letras, numeros ] = arreglo();

console.log(letras, numeros);

const _useState = ( valor ) => {
    return [valor , () => 'Esta es una funcion']
}

console.log(_useState('Brayan'));

//Ejercicio - desestructura el arreglo que proviene de invocar a la funcion _useState()
// 1, el valor desestructuralo como "nombre"
// 2, funcion como "getMensaje"

const [nombre, getMensaje] = _useState('Brayan')

console.log(nombre, getMensaje());
