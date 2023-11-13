//notacion de objetos
const usuraio = {
    //propiedades
    nombre : 'thiago' ,
    apellido : 'fiol' ,
    edad : 14 ,
    correo : 'thiagoFior@gmail.com' ,
    pasword : '1234',
    //metodos
    login : function(){
        document.write(`<p> El usuario inicio session</p>`);

    },
    logout : () =>{
        document.write(`<p>El usuario se desconecto </p>`);
    }

}

console.log(usuraio);