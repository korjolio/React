

const nombre = 'Pedro-Pablo';
const apellido = 'Bugueño';

const nombreCompleto = `${ nombre } ${ apellido }`;
console.log( nombreCompleto )

function getSaludo() {
    return 'Hola Mundo';
}

console.log( `Este es un texto: ${ getSaludo() }` )