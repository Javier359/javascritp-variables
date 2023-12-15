//notacion de objetos lietarl
//cuiado con las mayusculas
const usuraio = {
    //propiedades
    nombre : 'thiago' ,
    apellido : 'fiol' ,
    edad : 14 ,
    correo : 'thiagoFior@gmail.com' ,
    pasword : '1234ab@',
    //metodos
    login : function(){
        //este this devuelve una referencia a el objeto usuario / funciona como el objeto solo en funciones declarativas
        console.log(this);
        document.write(`<p> El usuario ${this.nombre}, inicio session</p>`);

    },
    logout : function(){
        document.write(`<p> El usuario ${this.nombre}, cerro session</p>`)
    }
    
}

//mostrar un objeto
console.log(usuraio);
document.write(usuraio);
document.write(`<h1>Usuario :${usuraio.nombre}, ${usuraio.apellido}</h1>`);
document.write(`<p>Correoo : ${usuraio['correo']}</p>`); //otra opcion de mostrar

//modificr la propiedad de un objeto
usuraio.edad = usuraio.edad + 1;
document.write(`<p>la edad nueva es : ${usuraio.edad}</p>`);
usuraio.perfil = "alguna foto de perfil"; //agrega un nuevo atributo, lo crea si no existe
document.write(`<p>La foto de perfil es : ${usuraio.perfil}</p>`);
console.log(usuraio);

//eliminar la propiedad de un objeto
delete usuraio.perfil;
console.log(usuraio)

//metodo para saber si el objeto tiene una propiedad
console.log(usuraio.hasOwnProperty('perfil')); //devuelve falso o verdadero

//invocar un metodo del objeto
usuraio.login();
usuraio.logout();

