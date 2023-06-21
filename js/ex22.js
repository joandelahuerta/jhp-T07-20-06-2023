//22. Escribe un programa que solicite al usuario ingresar una palabra y muestre en la consola
//cada letra de la palabra en una línea diferente utilizando un bucle `for`.

let palabra = prompt("Introduce una palabra:");
let divide = palabra.split('');

for (let i=0; i<divide.length; i++) {
    console.log(divide[i]);
}