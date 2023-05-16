// Importaciones
import heroes, {companies} from '../data/heroes';

//console.log(heroes, companies);

 const getHeroeById = ( id ) => {
   return heroes.find( heroe => heroe.id === id )
}

const getCompanieById = ( id ) => {
   return companies.find( companie => companie.id === id )
}

//console.log(getHeroeById(3));
//console.log(getCompanieById(1));

//   const {id, name, company} = heroes.find(el => el.name === 'Spiderman')

// console.log(id, name, company);

export {
   getCompanieById,
   getHeroeById,
}