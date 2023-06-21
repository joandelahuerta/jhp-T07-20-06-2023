//30. Crea un programa que solicite al usuario ingresar un número y luego determine si es un
//número perfecto (la suma de sus divisores propios es igual al número) utilizando un bucle
//`while`, una condición `if` y una variable acumuladora.

let numero = prompt("Ingresa un número:");
let sumdiv = 0;
let div = 1;

while (div < numero) {
    if (numero % div === 0) {
        sumdiv += div;
    }
    div++;
}

if (sumdiv == numero) {
    alert(numero + " es un número perfecto.");
    } else {
    alert(numero + " no es un número perfecto.");
}