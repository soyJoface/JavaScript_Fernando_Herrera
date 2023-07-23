
function saludar( nombre ){
    // console.log( arguments );
    console.log( `Hola ${nombre}` );
    return 10;
}

// const saludar2 = function(){
//     console.log('Saludar Dos')
// }


const saludarFlecha = () => {
    console.log('Hola flecha')
}

const saludarFlecha2 = nombre => console.log( `Hola ${nombre}`);

const retornoDeSaludar = saludar( 'Johnatan' );
console.log( {retornoDeSaludar} );
// saludar2();

saludarFlecha();

saludarFlecha2('Joface')

function sumar( a, b ) {
    return a + b;
}

console.log( sumar( 1, 2 ) )

const sumar2 = ( a, b) =>  a + b;
console.log( sumar2( 3, 5 ) )


function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio2() )