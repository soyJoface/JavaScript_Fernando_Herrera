/**
 * 2C = Clubs
 * 2D = Diamons
 * 2H = Hearts
 * 2S = Spades
 */

let deck          = [];
const tipos       = [ 'C', 'D', 'H', 'S' ];
const especiales  = [ 'A', 'J', 'Q', 'K' ];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML           = document.querySelectorAll('small');


// Esta función crear una nueva baraja
const crearDeck = () => {
    
    for( let i = 2; i <= 10; i++ ) {

        for( let tipo of tipos) {
            
            deck.push( i + tipo )
        }
    }

    for( let tipo of tipos ) {
        for( let especial of especiales ) {
            
            deck.push( especial + tipo )
        }
    }

    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );

    return deck;
}

crearDeck();

// Esta función me permite pedir una carta
const pedirCarta = () => {

    if ( deck.length === 0 ) {

        throw new Error('No hay cartas en el deck')
    }

    const carta = deck.pop();

    return carta;
}

// pedirCarta();

const valorCarta = ( carta ) => {

    const valor = carta.substring( 0, carta.length - 1 );

    return ( isNaN( valor ) ) ?
            ( valor === 'A') ? 11 : 10
            : valor * 1;

}

// Turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();

        puntosComputadora+= valorCarta( carta );
    
        puntosHTML[1].innerHTML = puntosComputadora;
    
        const imgCarta = document.createElement('img');
        imgCarta.src   = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );
        
        if( puntosMinimos > 21 ) {
            break;
        }

    } while( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ) );

    setTimeout( () => {
        
        if( puntosComputadora === puntosMinimos) {
            alert('Nadie gana')
        } else if( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador gana')
        } else {
            alert('Computadora gana')
        }

    }, 10 )
}


// Eventos
btnPedir.addEventListener('click', () => {
    
    const carta = pedirCarta();

    puntosJugador+= valorCarta( carta );

    puntosHTML[0].innerHTML = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src   = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if( puntosJugador > 21 ) {
        console.warn('Perdiste')
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ) {
        console.warn('21');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    }

});

btnDetener.addEventListener('click', ()=> {
    
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora( puntosJugador );
});

btnNuevo.addEventListener('click', () => {

    deck = [];
    deck = crearDeck();
    
    puntosJugador = 0;
    puntosComputadora = 0;

    btnDetener.disabled = false;
    btnPedir.disabled = false;

    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = " ";
    divCartasJugador.innerHTML = " ";

    console.clear();

} )
