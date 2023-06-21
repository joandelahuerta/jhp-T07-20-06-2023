//27. Crea un programa que solicite al usuario ingresar un número y luego calcule la suma de
//todos los números impares desde 1 hasta ese número utilizando un bucle `while` y una
//condición `if`.

let numero = prompt("Introduce un número:");
let suma = 0;
let i = 1;

while (i <= numero) {
    if (i % 2 !== 0) {
        suma += i;
        console.log(suma);
    }
    i++;
}
console.log("La suma total és: " + suma);