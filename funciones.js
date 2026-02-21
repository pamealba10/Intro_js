/* Funciones en JavaScript 
Las funciones son bloques de código reutilizables que realizan una tarea específica. Se definen usando la palabra clave `function`, seguida del nombre de la función, paréntesis y llaves. */

/* Ejemplo de función simple */
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}

/*  Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído. */

let librosLeidos = [];

// Esta función recibe un título y lo agrega al arreglo de libros leídos.
function agregarLibro(titulo) {
    // push() inserta el nuevo libro al final del arreglo.
    librosLeidos.push(titulo);
}   

// Esta función muestra en consola todos los libros guardados.
function mostrarLibrosLeidos() {
    // Imprime un encabezado para identificar la lista.
    console.log("Libros leídos:");
    // Recorre cada libro del arreglo y lo imprime en una línea.
    librosLeidos.forEach(libro => {
        console.log("- " + libro);
    });
}

// Agrega libros de ejemplo al arreglo.
agregarLibro("Cien años de soledad");
agregarLibro("El principito");
// Muestra en consola los libros que se agregaron.
mostrarLibrosLeidos();