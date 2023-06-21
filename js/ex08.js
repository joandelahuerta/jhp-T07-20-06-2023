//8. Crea un programa que pida al usuario ingresar tres números y determine cuál es el mayor
//de ellos

let num1 = prompt("Introduce el primer numero:");
let num2 = prompt("Introduce el segundo numero:");
let num3 = prompt("Introduce el tercer numero:");
let resultado;

if(num1>num2){
    resultado = num1;
}else{
    resultado = num2;
}
if(resultado>num3){
    resultado = resultado;
}else{
    resultado = num3;
}
alert("El numero " + resultado + " es el más alto.");