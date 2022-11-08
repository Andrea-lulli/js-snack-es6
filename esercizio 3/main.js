/*   
Snack 3
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa
 con le seguenti proprietà: nome e peso. Stampare a schermo la bici 
 con peso minore utilizzando destructuring e template literal
*/

let stampa = document.getElementById("stampa")

const bici = [
{
    nome: "bianchi",
    peso: 5,
},
{
    nome: "de rosa",
    peso: 4,
},
{
    nome: "ducati",
    peso: 8,
},
{
    nome: "carrera",
    peso: 10,
},
{
    nome: "rossi",
    peso: 9,
}

]

console.log(bici);



const newArray = bici.forEach(({peso}) =>{
    if (peso <= bici.peso) {
       console.log("ok");
        
    }
})
console.log(newArray);
// const elenco = bici.filter( ( element ) =>{
//     if(Math.min(element)) {
// return true 
//     }
//     stampa.innerHTML += element
// })

// console.log(elenco);

