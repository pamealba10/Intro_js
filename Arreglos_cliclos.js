/* EJERCICIO 3 - Arreglos y cliclos
En este proyecto, practicarás los conceptos básicos de arrays (arreglos) y loops (ciclos), que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while). */

/* 
1. Solución usando el ciclo for
El ciclo for es ideal cuando conocemos de antemano el tamaño de nuestra lista. */

let frutas = ['manzana', 'pera', 'manzana', 'platano', 'pera', 'manzana'];
let conteoFrutas = {};

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    
    // Si la fruta ya existe en el objeto, le sumamos 1
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si no existe, la inicializamos en 1
        conteoFrutas[fruta] = 1;
    }
}

console.log(conteoFrutas);



/* 2. Solución usando el ciclo while
El ciclo while requiere que gestionemos manualmente el índice (i), pero llega al mismo resultado. */
let i = 0;
while (i < frutas.length) {
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        conteoFrutas[fruta] = 1;
    }
    i++;
}
console.log(conteoFrutas);

/* 3. Solución usando un operador lógico para hacerlo más corto */

/* 
let frutas = ['manzana', 'pera', 'manzana', 'platano', 'pera', 'manzana'];
let conteoFrutas = {};
let i = 0;

while (i < frutas.length) {
    let fruta = frutas[i];
    
    // Usando un operador lógico para hacerlo más corto:
    // Si existe, suma 1; si no, empieza en 0 y suma 1.
    conteoFrutas[fruta] = (conteoFrutas[fruta] || 0) + 1;
    
    i++; // No olvidar el incremento
}



console.log(conteoFrutas); */