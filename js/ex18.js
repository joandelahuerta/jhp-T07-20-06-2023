//18. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
//suma de todos los números naturales hasta ese número utilizando un bucle `do...while`.

let numero = prompt("Introduce un número:");
let i = 0;
let resultado = 0;

do {
    i = i + 1;
    resultado = resultado + i;
    console.log(resultado);
} while (i < numero);