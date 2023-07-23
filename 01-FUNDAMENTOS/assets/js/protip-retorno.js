
function crearPersona( nombre, apellido ) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

// Mejorado

function crearPersonaMejorado( nombre, apellido ) {
    return {nombre, apellido }
}

const persona = crearPersonaMejorado('Fernando', 'Herrera');
console.log( persona );

const crearPersonaFlecha = ( nombre, apellido ) => ({nombre, apellido})  // Si no se colocan los parentesis retorna undefined, debido a que JS no sabe que eso es lo que quiero regresar y piensa que es el cuerpo de la función más no el objeto.
const personaFlecha = crearPersonaFlecha('Johnatan', 'Centeno');
console.log( personaFlecha )


function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos( 10, true, false, 'Fernando', 'Hola')

const imprimeArgumentos2 = ( ...args ) => {    // Si no se coloca el ...(parametro rest) solo imprimirá el primer argumentos, en este caso, el 10.
    console.log( args )
}

imprimeArgumentos2(10, 20, 50, 'Hola')