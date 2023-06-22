//33. Crea un programa que solicite al usuario ingresar una palabra y luego muestre en la
//consola la palabra invertida utilizando un bucle `while`, una condición `if` y una variable
//acumuladora.

let palabra = prompt("Introduce una palabra:");
let longitud = palabra.length;
let invertir = "";

while (longitud > 0) {
    invertir += palabra[longitud - 1];
    longitud--;
}
console.log(invertir);