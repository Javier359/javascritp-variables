//notacion de objetos
//cuiado con las mayusculas
const usuraio = {
    //propiedades
    nombre : 'thiago' ,
    apellido : 'fiol' ,
    edad : 14 ,
    correo : 'thiagoFior@gmail.com' ,
    pasword : '1234',
    //metodos
    login : function(){
        //este this devuelve una referencia a el objeto usuario
        console.log(this);
        document.write(`<p> El usuario ${this.nombre}, inicio session</p>`);

    },
    logout : () =>{
        document.write(`<p>El usuario se desconecto </p>`);
    }

}

console.log(usuraio);
document.write(usuraio);
document.write(`<h1>Usuario :${usuraio.nombre}, ${usuraio.nombre}</h1>`);
document.write(`<p>Correoo : ${usuraio['correo']}</p>`);
//modificr la propiedad de un objeto
usuraio.edad=50;
document.write(`<p>la edad nueva es : ${usuraio.edad}</p>`);

//eliminar la propiedad de un objeto
delete usuraio.apellido;
document.write(`<p> El apellido nuevo es: ${usuraio.apellido}</p>`);
console.log(usuraio);

//metodo para saber si el objeto tiene una propiedad
console.log(usuraio.hasOwnProperty('edad'));

//invocar un metodo del objeto
usuraio.login();
usuraio.logout();

