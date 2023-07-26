
const heroes = ['Bataman', 'Superman', 'Mujer Maravilla', 'Aquaman'];
console.warn('For Tradicional')

for( let i = 0; heroes[i]; i++ ) {
    console.log( heroes[i] );
}

console.warn('For In')
for( let i in heroes ) {
    console.log( heroes[i]);
}

console.warn('For of')
for( let heroe of heroes ){
    console.log( heroe );
}

console.warn('Fibo')

function fibonacci( num ) {
    const fib = [ 0, 1 ];

    for (let i = 2; i <= num ; i++) {
        
        fib[i] = fib[i - 1] + fib [ i - 2 ];
    }

    return fib[ num ];
}

console.log(fibonacci(10));

console.warn('Fibo Recursividad')

function fibo( num ){
    let resultado = ( num < 2 ) ? num : fibo( num - 1 ) + fibo( num - 2 );
    
    return resultado;
}

console.log( fibo(10) );