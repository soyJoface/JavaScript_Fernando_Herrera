
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