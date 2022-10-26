const persona = {
    nombre: 'Pedro-Pablo',
    apellido: 'Bugueño',
    edad: 31,
    direccion: {
        ciudad: 'San Felipe',
        Zip: 32432,
        lat: 14.3344,
        long: 33.3434,
    }
};


const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log( persona );
console.log( persona2 );