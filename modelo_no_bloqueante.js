'use strict'

setTimeout(function(){
    console.log('Tarea 1')
}, 3000); // Espera 3 segundos

setTimeout(function(){
    console.log('Tarea 2')
}, 20000); // Espera 20 segundos

setTimeout(function(){
    console.log('Tarea 3')
}, 10000); // Espera 10 segundos

setTimeout(function(){
    console.log('Tarea 4')
}, 2000); // Espera 2 segundos

console.log('Tarea 5');
console.log(process.uptime())
console.log('Fin del programa');