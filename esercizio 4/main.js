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



squadre.forEach((element)=>{
    element.puntiFatti = Math.floor(Math.random()* 30)+1
    element.falliSubiti = Math.floor(Math.random()* 50)+1
})

console.log(squadre);


const nuovoArray = [];

squadre.forEach(({nome, falliSubiti})=>{
    nuovoArray.push({nome,falliSubiti})
})

console.log(nuovoArray);

// let nuovoArray = squadre.filter (({nome, falliSubiti}) =>{
//    const {nome, falliSubiti}
//    return true 
// })   

// console.log(nuovoArray.nome);



