'use strict' //Modo estricto para programar con buenas practicas
//Imprime la pantalla
console.log('Hola mundo desde Node.js, esto se vera en la terminal de comandos')
//Hacemos una operacion basica
console.log(2*5)
//al utilizar una funcion de js frontend marca error en node js
console.log(window)
//imprime en consola todo lo relacionado con el modulo GLOBAL
console.log(global)
//Realizamos una funcion para imprimir cada segundo 'hola node.js'
setInterval(function(){
    console.log('Hola nodejs')
},1000)