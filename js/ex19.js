//19. Escribe un programa que muestre en la consola los números impares del 1 al 20 utilizando
//un bucle `for`.

let numero = prompt("Introduce un número:");
for (let i = 0; i <= numero; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}