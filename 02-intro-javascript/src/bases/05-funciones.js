
const saludar = function saludar( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 =  ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 =  ( nombre ) => `Hola, ${ nombre }`;

const saludar4 =  () => `Hola mundo!`;


console.log( saludar2('Vegueta') );
console.log( saludar3('Goku') );
console.log( saludar4() );

const getUser = () => ({
    uid: 'ABC123',
    username: 'Papiwallace',
})

const user = getUser();
console.log( user )


const getUsuarioActivo = ( nombre ) =>  ({
        uid: 'ABC567',  
        username: nombre,
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo )