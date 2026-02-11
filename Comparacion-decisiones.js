/* Comparaciones y decisiones en JavaScript
En este proyecto, practicarás los conceptos básicos de variables, comparaciones y toma de decisiones en JavaScript que has visto hasta este momento.

Objetivo
El objetivo es agregar un archivo a tu repositorio y que contenga la solución al problema planteado a continuación.

Problema: Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.
Instrucciones (pistas) para resolver el problema:
Declara una variable llamada nota y asígnale un valor numérico entre 0 y 100.Puede ser un valor aleatorio (opcional).
Usa una condición if para verificar si el valor de nota es mayor que 0 (truthy).
Utiliza operadores de comparación (<,>, <=, >=) para determinar el rango de la nota.
Imprime en la consola un mensaje que indique la nota que obtuvo el alumno.
Adicionalmente - Prueba diferentes valores para la variable nota (por ejemplo, 45, 60, 75, 0) para ver cómo cambia el resultado.
Entregables

*/
/* USO DE rl es el objeto de la interfaz de lectura (readline) que te permite pedir datos por consola. Con rl.question(...) muestras el mensaje y recibes lo que escribe el usuario, y con rl.close() cierras esa entrada para que el programa termine. */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingresa una nota entre 0 y 100: ", (input) => {
    const nota = Number(input);

    if (!Number.isFinite(nota) || nota < 0 || nota > 100) {
        console.log("Valor invalido. Debe ser un numero entre 0 y 100.");
        rl.close();
        return;
    }

    if (nota >= 90) {
        console.log("EXCELENTE");
    } else if (nota >= 75 && nota <= 89) {
        console.log("BIEN");
    } else if (nota >= 60 && nota <= 74) {
        console.log("SUFICIENTE");
    } else {
        console.log("ALUMNO REPROBADO");
    }

    console.log(nota);
    rl.close();
});
    
