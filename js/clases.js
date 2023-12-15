// averiguar en que version del ES se agrego la sintaxis de clases
//anio
//una clase es un molde paraccrear muchos objetos
 class VideoJuego{
    //el metodo constructor permite contruir nuestro objeto
    #etiquetas; //propiedad privada con el cual se accede solo por get y set
    constructor(tituloParam, precioParam, generoParam, etiquetasParam, anioDeLanzamientoParam, desarrolladorParam){
        //declaramos las propiedades que tendra un video juego
        //Todas nuestras propiedades seran publicas
        this._titulo = tituloParam; // propiedad / valor asignado a la propiedad
        this._precio = precioParam;
        this.genero = generoParam;
        this.#etiquetas = etiquetasParam;
        this.anio = anioDeLanzamientoParam;
        this.desarrollador = desarrolladorParam;
        //propiedad por defecto
        this.publicado = false;

    }
    //propiedades computadas get y set
    get titulo(){ //sirve para retornar un valor
        return this._titulo; //necesito acceder al this para acceder al objeto siempre
    }
    
    get precio(){
       return this._precio;
    }
    set titulo(nuevoTitulo){ //sirver para modificar un valor
        if(nuevoTitulo === ""){
            this._titulo = nuevoTitulo;
        }else{
            alert('debe ingresar un nuevo titulo');
        }
    }

    //aqui declaro mis metodos
    mostrarDatos(){
        document.write(`<ul>
        <li>Tutulo : ${this.titulo}</li>
        <li>Precio : ${this.precio}</li>
        <li>Genero : ${this.genero}</li>
        <li>Desarrollador : ${this.desarrollador}</li>
        </ul>`);
        //se agrego los datos del antagonista y demas
    }
 }

 class JuegoDeSupervivencia extends VideoJuego{ //extend hereda
    #protagonista;
    #antagonista;
    constructor(tituloParam, precioParam, generoParam, etiquetasParam, anioDeLanzamientoParam, desarrolladorParam, protagonistaParam, antagonistaParam){
        //invocamos al constructor de la clase padre videojuego con la palabra super
        super(tituloParam, precioParam, generoParam, etiquetasParam, anioDeLanzamientoParam, desarrolladorParam);
        this.protagonista = protagonistaParam;
        this.antagonista = antagonistaParam;
    }

    get protagonista(){
        return this.#protagonista;
    }

    set protagonista(nuevoProtagonista){
        this.#protagonista = nuevoProtagonista;
    }
    get antagonista(){
        return this.#antagonista;
    }

    set antagonista(nuevoAntagonista){
        this.#antagonista = nuevoAntagonista;
    }

    //aqui los metodos
    mostrarInfoExtra(){ //esta opcion es valida para crear otro metodo de 0 con todo
        
    }

    // mostrarDatos(){ //lo estoy sobreescribiendo esto es polimorfismo / traemos lo que ya teniamos y agregamos mas datos
    //     super.mostrarDatos();
    //     document.write(`<h2>informacion extra</h2>
    //     <ul>
    //         <li>Protagonista: ${this.protagonista}</li>
    //         <li>Antagonista: ${this.antagonista}</li>
    //     </ul>
    //     `);
    // }
    //otra forma escribiendo todo
    mostrarDatos(){
        document.write(`<ul>
        <li>Tutulo : ${this.titulo}</li>
        <li>Precio : ${this.precio}</li>
        <li>Genero : ${this.genero}</li>
        <li>Desarrollador : ${this.desarrollador}</li>
        <li>Protagonista: ${this.protagonista}</li>  
        <li>Antagonista: ${this.antagonista}</li>
        </ul>`);
        //se agrego los datos del antagonista y demas
    }

 }

 //crear o insertar un objeto

 const minecraft = new VideoJuego('Minecraft', '18$', 'Aventura', ['Cubos', 'Aventura', 'Creeper'], 2006, 'Mojang');
 minecraft.mostrarDatos();

 document.write(`<p>Titulo del juego : ${minecraft.titulo}, ${minecraft._precio}</p>`); //se accede al get

 //cremos un nuevo juego con herencia

 const rust = new JuegoDeSupervivencia('Rust','Supervivencia','30$',['multijugador','pvp','realista'], 2016,'algun desarrollador', 'chicho', 'nacho');
 console.log(rust);
rust.mostrarDatos();
