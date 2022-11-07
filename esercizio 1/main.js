/*
Snack 1
Dato l'array di nomi:

e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la
 posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
esempio: dati i valori min: 2 e come max: 4 i nomi nell'array 
nuovo saranno i nomi compresi tra queste posizioni 2 e 4
*/

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const min = 2;
const max = 4;

// console.log(myArray.slice(2, 5));

// const newArray = myArray.forEach((element) => {
    
//     console.log(element);
    
// });



const array = myArray.filter((element , index) =>{

   if (min == index || max == index) {
    return true
   }
    
})
console.log(array);

