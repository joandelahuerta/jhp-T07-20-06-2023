//25. Escribe un programa que solicite al usuario ingresar una frase y muestre en la consola cada
//palabra de la frase en una línea diferente utilizando un bucle `for...of`.

let frase = prompt("Introduce una frase:");
let divide = frase.split(" ");

for (let i=0; i<divide.length; i++) {
    console.log(divide[i]);
}