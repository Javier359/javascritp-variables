/*declarar una variable- tipos de variables: String, number(Decimal y enteros), boolean, null*/
/*declarar variables con let y const (Ya no se usa var) */
/*Usamos let cuando sabemos que el dato puede cambiar su valor con el tiempo*/
/*Usamos const para valores que solo tienen un unico valor y no cambia*/
let yearCurrent = 2023;
const url = "https://campus.rollingcodeschool.com";
/*mostrar mensaje*/

console.log("año actual: " + yearCurrent + " hola mundo");
/*modificar el contenido de una variables*/
yearCurrent = 2023 +1;
console.log("año actual: " + yearCurrent);
console.log(url);

/*usamos esto para mandar etiquetas de html o texto */
document.write('hola mundo<br>');
document.write('hola mundo');
document.write('<h1 class="titulo">hola mundo ' + yearCurrent + '</h1>');

//ventana emergente
alert('Ejemplo de alerta!');
//solicitar un numero al usuario
//el prompt es todo texto, hay que trabajarlo
const solicitedNum = parseInt(prompt("ingrese un numero"));
console.log(solicitedNum);

console.log('resultado: ' + (solicitedNum + 5));
console.log(solicitedNum + 5);
//transfotmo el promt
//parseInt();