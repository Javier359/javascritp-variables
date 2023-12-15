// averiguar en que version del ES se agrego la sintaxis de clases
//anio
//una clase es un molde paraccrear muchos objetos
 class VideoJuego{
    //el metodo constructor permite contruir nuestro objeto
    constructor(tituloParam, precioParam, generoParam, etiquetasParam, anioDeLanzamientoParam, desarrolladorParam){
        //declaramos las propiedades que tendra un video juego
        //Todas nuestras propiedades seran publicas
        this.titulo = tituloParam; // propiedad / valor asignado a la propiedad
        this.precio = precioParam;
        this.genero = generoParam;
        this.etiquetas = etiquetasParam;
        this.anio = anioDeLanzamientoParam;
        this.desarrollador = desarrolladorParam;
        //propiedad por defecto
        this.publicado = false;

    }
    //propiedades computadas get y set
    get titulo(){ //sirve para retornar un valor
        return this.titulo; //necesito acceder al this para acceder al objeto siempre
    }
    
    get precio(){
       return this.precio;
    }
    set titulo(nuevoTitulo){ //sirver para modificar un valor
        if(nuevoTitulo === ""){
            this.titulo = nuevoTitulo;
        }else{
            alert('debe ingresar un nuevo titulo');
        }
    }

    //aqui declaro mis metodos
    mostrarDatos(){
        document.write(`<ul>
        <li>Tutulo : ${this.titulo}</li>
        <li>Tutulo : ${this.precio}</li>
        <li>Tutulo : ${this.genero}</li>
        <li>Tutulo : ${this.desarrollador}</li>
        </ul>`);
    }
 }