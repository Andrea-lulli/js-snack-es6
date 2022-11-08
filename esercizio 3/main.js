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

const { nome } = bici[0];
console.log(nome);

// //trova peso min 
// let pesoMin = bici.filter(({nome, peso})=>{
//   if (peso < 5) {
//     console.log(nome, peso); 
//     return (nome, peso)    
//   } 
// })

//trova peso min con template literal
let pesoMin = bici.filter(({nome, peso})=> (peso < 5) )

//stampa il risultato 
pesoMin.forEach(({nome, peso})=>{
    stampa.innerHTML +=  ` <div>La bici più leggera è : Marca: ${nome} con peso: ${peso}</div> `
})


console.log(pesoMin);
