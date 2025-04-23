// let factorial = 1
// for (let i =1; i<=5;i++){
//     factorial=factorial*i
//     console.log("iteracción",i)
// }
// console.log(factorial)

// let j = 0;
// do {
//     console.log(j);
//     j++;
// } while (j < 5);

// let frutas = ["manzana", "banano", "pera"];
// console.log(frutas[0]);
// console.log(frutas[2]);

// frutas[1] = "kiwi";
// console.log(frutas);
// console.log(frutas.length)

// for (let i=0; i<frutas.length; i++){
//     console.log(frutas[i])
// }

let entrada= document.getElementById("entrada");
let btn= document.getElementById("btn");
let salida=document.getElementById("salida");
let serie=[1,1];

entrada.addEventListener("input",(evento)=>{
    numero = evento.target.value;
    console.log(numero);
});

btn.addEventListener("click",()=>{
    let hijo = document.createElement("li")
for (let i=2; i<=numero; i++){
    serie[i]=serie[i-1] + serie[i-2]; 
}
hijo.innerHTML=serie
salida.appendChild(hijo);
})

