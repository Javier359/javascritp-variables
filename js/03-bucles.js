//ciclos while
//aumenta
let numero =1;
while(numero <= 10){
    document.write(`<p>Región número ${numero}</p>`);
    numero = numero +1;
}
//decrementa
let contador = 10;
do{
    document.write(`<p>Región número ${contador} con do-while</p>`);
    contador--
}while( contador >= 1)

//ciclos for
for (let i=1 ; i<=5 ;i++){
    document.write(`<p>Región número ${i} con ciclo for</p>`);    
}