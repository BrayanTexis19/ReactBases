//Desestructuración de objetos

const vehiculo = {
    aniho: 2023,
    id: 123,
    marca: 'Nissan',
    modelo: 'Sentra',
}

console.log(vehiculo);

console.log(vehiculo.aniho);

const {marca, modelo:modelo2, id} = vehiculo;

console.log(marca, modelo2, id);

const modelo = 'March'
console.log(modelo);

const getModelo = ( { modelo } ) => {
    return modelo;
}

console.log(getModelo(vehiculo));


const user = {
    nickname: 'admin',
    name: 'eduardo',
    pass: '123',
    llaves: {
        publica: '334949tf83838""###c',
        privada: 'ee3$%66$$%5dddkgjt9484',
    }
}


const _useContext = ({ nickname, name, pass='9999', llaves: {publica, privada}}) => {
    return {
        nombre: name,
        usuario: nickname,
        contrasenia: pass,
        llaves: {
            publica: publica,
            privada: privada,
        }
    }
}


console.log(_useContext(user));