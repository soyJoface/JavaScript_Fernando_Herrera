
let a = 5;

if ( a > 10 ) {
    console.log( 'A es mayor a 10' );
} else {
    console.log( 'A es menor a 10' );
}

console.log( 'Fin del programa ');

const hoy = new Date();
let dia = hoy.getDay();
console.log( hoy );
console.log( {dia} );
 
if ( dia === 0 ) {
    console.log( 'Hoy es domingo' );
} else if ( dia === 1 ) {
    console.log( 'Hoy es lunes' );
} else if ( dia === 2 ) {
    console.log( 'Hoy es martes ');
}

dia = 4;

const diasSemanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
console.log( diasSemanas[dia] || 'Día no definido' );


const diasLetras = { 
    0 : 'Domingo',
    1 : 'Lunes',
    2 : 'Martes',
    3 : 'Miercoles',
    4 : 'Jueves',
    5 : 'Viernes',
    6 : 'Sabado'
}

console.log( diasLetras[dia] || 'Día no definido' );