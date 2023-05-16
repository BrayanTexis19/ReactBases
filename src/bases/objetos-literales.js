//Objetos Literales

const persona = {
    nombre: 'Brayan',
    apellido: 'Texis',
    edad: 21,
    direccion: {
        calle: 'Reforma',
        no: 10414,
        colonia: 'Candelaria',
        municipio: 'Puebla',
    }
}

console.log(persona.direccion.colonia);

const persona2 = {...persona}; //operador de propagación - spread

console.log(persona2.edad);

