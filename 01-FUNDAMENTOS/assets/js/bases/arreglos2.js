let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo  = juegos[juegos.length - 1];
// console.log( ultimo );

console.log( { primero, ultimo } )

juegos.forEach( (elemento, index, arr) => {
    console.log( { elemento, index, arr })
});

let nuevaLongitud = juegos.push('F-Zero');
console.log( { nuevaLongitud, juegos } );

nuevaLongitud = juegos.unshift('Fire Emblem'); // Agregar al inicio UNSHIFT
console.log( { nuevaLongitud, juegos } );

let juegoBorrado = juegos.pop();  // Borrar el último elemento del arreglo y lo retorna
console.log( { juegoBorrado, juegos } );


let posicion = 1;
let borrados = juegos.splice( posicion, 2 ); // Borrar elementos en determinada posicion
console.log( { borrados, juegos } )


let metroidIndex = juegos.indexOf( 'Metroid' ); // Si el indexOf regresa -1 significa que no lo encontró.
console.log( { metroidIndex } ); 
