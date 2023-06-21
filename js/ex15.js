//15. Escribe un programa que pida al usuario ingresar un año y determine si es bisiesto o no (un
//año es bisiesto si es divisible entre 4, pero no entre 100, a menos que también sea divisible
//entre 400).

let año = prompt("Introduce tu nota:");
if (((año % 4 == 0) && (año % 100 != 0 )) || (año % 400 == 0)){
    alert( año + " es bisiesto.");
} else {
    alert( año + " no es bisiesto.");
}