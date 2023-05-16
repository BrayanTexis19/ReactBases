// Async - Await

import { getHeroeById } from './bases/importaciones-exportacion'

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

// console.log(getHeroeById(1));

const getHeroeByAsync2 = async (id) =>{
     try {
        const heroe = await getHeroeByIdAsync(id);
        console.log(heroe);
     } catch (err) {
         console.log(err);
    }
 }

console.log(getHeroeByAsync2(1));
