//31. Realiza un programa que solicite al usuario ingresar un número y luego muestre en la
//consola todos los números primos desde 1 hasta ese número utilizando un bucle `for`, una
//condición `if` y una función auxiliar para verificar si un número es primo.

function primo(numero) {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        return false;
        }
    }
    return true;
}

let numero = prompt("Introduce un número:");

for (let i = 1; i <= numero; i++) {
    if (primo(i)) {
    console.log(i);
    }
}