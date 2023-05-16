import {getHeroeById} from './bases/importaciones-exportacion.js'

//Promesas en javascript

// Las promesas son asincronas por definición

const getHeroeByIdAsync = ( id ) => {
    return new Promise( (resolve, reject)  => {
        setTimeout(() => {
            //cambia a estado fulfill
            const heroe = getHeroeById(id);
            if( heroe )     
            resolve(heroe);
            else
            reject('No se encuentra el heroe')
        }, 2000);
    })
    //En caso de que la respuesta es exitosa
    .then( (heroe) => {
    console.log(heroe);
    })
    //En caso de que la respuesta No es exitosa
    .catch((error) => {
     console.log(error);
    })  
}

console.log(getHeroeByIdAsync(10));
