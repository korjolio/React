import { getHeroeById } from './bases/08-import'
import heroes from './data/heroes';

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // console.log('2 Segundos después')
//         // resolve();
//         const p1 = getHeroeById(2);
//         resolve(p1);

//         // reject('No se puede encontrar el Héroe');
//     }, 2000)

// });


// promesa.then(() => {
//     console.log('Héroes: ', heroes)
// })
//     .catch(err => console.warn(err));

const getGeroByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se puede encontrar el Héroe');
            }

        }, 2000)

    });
}

getGeroByIdAsync(2)
    .then(heroes => console.log('Heroe: ', heroes))
    .catch(err => console.warn(err));