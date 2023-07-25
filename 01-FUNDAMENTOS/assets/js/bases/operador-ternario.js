/** 
 * Días de la semana abrimos a las 11,
 * Fines de semana abrimos a las 9,
 * 
 * Entrar a un sitio web para consultar si está abierto
 * 
 */
const fecha = new Date();
let dia     = fecha.getDay();
const horaActual = 10;

let horaApertura;
let mensaje; // Está abierto; Está cerrado, hoy abrimos a las XX

// if ( dia === 0 || dia === 6 ) {  // If ( [0,6].includes( dia ) )
//     console.log('Fin de semana');
//     horaApertura = 9;
// }  else {
//     console.log( 'Día de semana' );
//     horaApertura = 11;
// }




horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11 ;

mensaje = ( horaActual >= horaApertura) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura } `;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Está abierto'
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
// }


console.log( {horaApertura, mensaje} );
