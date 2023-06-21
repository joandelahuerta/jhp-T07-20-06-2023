//29. Escribe un programa que solicite al usuario ingresar una palabra y luego cuente y muestre
//en la consola la cantidad de vocales que tiene la palabra utilizando un bucle `for`, una
//condición `if` y una variable contador.

let palabra = prompt("Introduce una palabra:");
let contadorVocales = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if (letra == "a" || letra == "A"){
        contadorVocales++;
    }
    else if (letra == "e" || letra == "E"){
        contadorVocales++;
    }
    else if (letra == "i" || letra == "I"){
        contadorVocales++;
    }
    else if (letra == "o" || letra == "O"){
        contadorVocales++;
    }
    else if (letra == "u" || letra == "U"){
        contadorVocales++;
    }
}
console.log(palabra + "' tiene " + contadorVocales + " vocales.");