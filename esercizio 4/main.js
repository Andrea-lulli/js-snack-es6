/*
Snack4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà 
diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica 
proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti 
e falli subiti. Infine usando la destrutturazione creiamo un nuovo array 
i cui elementi contengono solo nomi e falli subiti e 
stampiamo tutto in console.
*/



const squadre = [
    {
        nome: "roma",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "lazio",
        puntiFatti: 0,
        falliSubiti: 0,

    },
    {
        nome: "inter",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "juve",
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: "milan",
        puntiFatti: 0,
        falliSubiti: 0,
    }
    
    ]


// creati punti e fallifatti random 
squadre.forEach((element)=>{
    element.puntiFatti = Math.floor(Math.random()* 30)+1
    element.falliSubiti = Math.floor(Math.random()* 50)+1
})

console.log(squadre);


// creato array con foreach con solo fallisubiti e nome
const nuovoArray = [];

squadre.forEach(({nome, falliSubiti})=>{
    nuovoArray.push({nome,falliSubiti})
})

console.log(nuovoArray);


// creato array con map con solo fallisubiti e nome
 let nuovoArray2 = squadre.map (({nome, falliSubiti}) =>{

    return { nome, falliSubiti };

    
 })   

 console.log(nuovoArray2);

//stampa nomi e falli subiti 
 nuovoArray2.forEach((element)=>{
    let stampa = document.getElementById("stampa").innerHTML += `<li>Squadra: ${element.nome} Falli Subiti: ${element.falliSubiti}</li>`
 })
 

 




