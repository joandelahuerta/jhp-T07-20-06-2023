//21. Realiza un programa que solicite al usuario ingresar un número y muestre en la consola la
//multiplicación de todos los números enteros positivos menores o iguales a ese número
//utilizando un bucle `do...while`.

let numero = prompt("Introduce un número:");
let i = 1;
let resultado = 1;

do {
    i = i + 1;
    resultado = resultado * i;
    console.log(resultado);
} while (i <= numero);