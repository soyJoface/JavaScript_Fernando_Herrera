let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    isAlive: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima Pelicula': 'Infinity War',
};

console.log( personaje );
console.log('Nombre:' , personaje.nombre);
console.log( 'Nombre:', personaje['codeName'] );
console.log( 'Edad:', personaje.edad );

console.log( 'Coords:', personaje.coords);
console.log( 'Latitud:', personaje.coords.lat);

console.log( 'Nro Trajes: ', personaje.suits.length );
console.log( 'Ultimo Traje:', personaje.suits[personaje.suits.length - 1]);

const x = 'isAlive';
console.log('Vivo:', personaje[x]);

console.log( 'Ultima Pelicula:', personaje["ultima Pelicula"])



// Más detalles

delete personaje.edad;   // Borrar propiedades de un objeto
console.log( personaje );

personaje.casado = true;

const entriesPares = Object.entries( personaje ); // Convertir un objeto a Array
console.log( entriesPares );

Object.freeze( personaje ); // Congelar el objeto. Solo se pueden modificar los valores de los objetos dentro del objeto.

const propiedades = Object.getOwnPropertyNames( personaje );
const valores     = Object.values( personaje );
console.log( { propiedades, valores } );


