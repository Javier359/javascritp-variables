let numero = parseInt(prompt("Ingrese un numero"));

if (numero % 2 == 0 && numero % 3 == 0 && numero % 5 == 0 && numero % 7 == 0 ){
    document.write("Es divisible por todos");
}else {
    if(numero % 2 == 0){
        document.write("Es divisible en 2");
    }
    if(numero % 3 == 0){
        document.write("Es divisible en 3");
    }
    if(numero % 5 == 0){
        document.write("Es divisible en 5");
    }
    if(numero % 7 == 0){
        document.write("Es divisible en 7");
    }
    
}