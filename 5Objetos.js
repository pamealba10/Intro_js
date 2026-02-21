/*  Objetos en JavaScript */

/* Un objeto es una colección de propiedades, donde cada propiedad es una asociación entre un nombre (clave) y un valor. Los objetos se definen usando llaves {} y pueden contener cualquier tipo de dato, incluyendo otros objetos. */

/* Ejemplo de un objeto simple */   
const persona = {
    nombre: "Pamela",
    edad: 26,
    ciudad: "CDMX"
};

/* Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro. */

// Se crea el objeto libro con sus propiedades y métodos.
const libro = {
    // Título del libro.
    titulo: "Harry Potter y la piedra filosofal",
    // Autor del libro.
    autor: "J.K. Rowling",    
    // Año de publicación.
    anio: 1997,
    // Estado actual del libro: disponible o prestado.
    estado: "disponible",
    // Arreglo donde se guardan los capítulos.
    capitulos: [],  
    // Método que imprime la información básica del libro.
    describirLibro: function() {
        // this hace referencia al propio objeto libro.
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    // Método para agregar un capítulo al arreglo capitulos.
    agregarCapitulo: function(capitulo) {
        this.capitulos.push(capitulo);  
    },
    // Método para eliminar un capítulo específico.
    eliminarCapitulo: function(capitulo) {
        // Busca la posición del capítulo dentro del arreglo.
        const index = this.capitulos.indexOf(capitulo); 
        // Si el capítulo existe (índice distinto de -1), lo elimina.
        if (index !== -1) {
            this.capitulos.splice(index, 1); 
        }   
    }
};  

// Muestra en consola la descripción del libro.
libro.describirLibro();
// Agrega dos capítulos de ejemplo.
libro.agregarCapitulo("Capítulo 1: El inicio de la historia");
libro.agregarCapitulo("Capítulo 2: El misterio se revela");  
libro.agregarCapitulo("Capítulo 3: La revelación final");  
libro.agregarCapitulo("Capítulo 4: El final del misterio"); 

// Imprime la lista de capítulos después de agregarlos.
console.log("Capítulos del libro:", libro.capitulos);
// Elimina un capítulo específico por su nombre. se elimina el capitulo 1
libro.eliminarCapitulo("Capítulo 1: El inicio de la historia");
// Imprime la lista final tras eliminar un capítulo.
console.log("Capítulos del libro después de eliminar uno:", libro.capitulos);

