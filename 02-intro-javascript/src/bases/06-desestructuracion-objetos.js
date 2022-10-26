
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'General'
};

// const { nombre, edad, clave } = persona

// console.log( nombre )
// console.log( edad )
// console.log( clave )

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    // console.log( nombre, edad, rango )

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.090,
            lng: -12.343
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng)

