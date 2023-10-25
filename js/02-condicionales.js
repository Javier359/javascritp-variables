/*condicioanes logicacas  */
/*hay que voatr, entre 16 y 18 no es obligatorio. Despues de los 70 ya no es obligatorio */
const edad = parseInt(prompt("Ingrese su edad"));
if ((edad >= 16 && edad <=18) || edad>70) {
    alert("Es optativo votar");
}else{
    if (edad >= 18 && edad <=70) {
        alert("Es obligatorio votar")
    }else{
        alert ("No se puede votar aun");
    }
};
