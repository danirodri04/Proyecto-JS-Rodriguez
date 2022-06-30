//CLASE 1
//Comentarios de una linea
/*
Comentario multi-linea

*/
/**
 * Comentario multi-linea: esto sirve para comentar algo mas complejo 
 */

/*Las palabras reservadas tienen un color unico*/

/*var nombre = "Daniel";*/  //String o texto.
/*var apellido = "Rodriguez";
var sueldo = 1050 //Formato number o numero
var esProfesor = true //Boolean o logicas es_profesor, son verdaderos o falsos este tipo de variables.
var esPropietario = null //null o vacio, este es un dato vacio no tiene nada
var esPadre = undefined //undefined o indefinido, no se sabe cual es el tipo de dato, java script usa mucho esto ya que trae muchos datos indefinidos ya que este dato lo defino yo como programador o usuairo.*/

/*console.log(nombre)
nombre = "Pancho"
console.log(nombre)
nombre = true
console.log(nombre)
nombre = null
console.log(nombre)
nombre= undefined
console.log(nombre)*/

//Las variables se pueden modificar facilmente//



//CLASE 2
//CONDICIONALES ANIDADOS 
//if(desayuno = "Cafe") este codigo es lo mismo que poner (true), en un condicional siempre se consulta con un doble igual

 //Desayuno es igual a Cafe
/*let desayuno = prompt("Ingerese su desayuno").toLowerCase() //CAFE = cafe

if(desayuno == "cafe") { //Desayuno es igual a Cafe? //Una asignacion en javascript siempre es verdadero
   console.log ("Desayuno cafe con leche");
} 
else if(desayuno == "te"){
    console.log ("Desayuno te con leche");
}
else if( desayuno == "chocolatada") {
    console.log ("Desayuno chocolatada")
}
else{
    console.log("Desayuno mate mirando una pared")
}*/

//parseFloat() paso string a numero flotando, osea con coma
//parseInt() paso string a numeros enteros, osea elimino decimales

/*
  5 == "5"  //Mismo valor
  "5" + "5" = "55"
   5 + 5 = 10
   "5" + 5 = "55"

   == "Se utiliza para valor"
   === " Se utiliza valor y tipo"
*/

/*
if(5 == "5") {
    console.log("V")
} else {
    console.log("F")
}

//NaN cuando no me ingresan un numero 
let numero = parseFloat(prompt("Ingerese un numero"))

console.log(numero) 

if (isNaN(numero)) { //Verdadero si numero es NaN
    alert("Numero no valido")
} else {
    console.log(numero + 5)
}*/

/*
let numero1 = 3
let numero2 = 20


if(numero1 === 5 && numero2 === 10){
    console.log ("V")
} else {
    console.log ("F")
}


/*numero1  ||   numero2
    V       V        V
    V       V        F
    F       V        V
    F       F         F

/*
if(numero1 === 5 && numero2 === 10){
    console.log ("V")
} else {
    console.log ("F")
}


  numero1   &&   numero2
    V       V        V
    V       F        F
    F       F        V
    F       F        F
*/

/* 
1 a 5 "Desaprobado"
6 o 7 "Aprobado Bien"
8 o 9 "Aprobado Muy Bien"
10 "Aprobado Excelente"
*/

/*
let nota = parseInt(prompt("Ingrese una nota"))

let desaprobado = (nota >= 1 && nota <= 5 )
let bien = (nota === 6 || nota === 7 )
let muyBien = (nota === 8 || nota === 9 )
let excelente = (nota === 10)


if(desaprobado) {
    alert("Alumno/a desaprobado")
} else if(bien) {
    alert("Alumno/a aprobado con nota de Bien")
} else if(muyBien){
    alert("Alumno/a aprobado con nota de Muy Bien")
} else if(excelente){
    alert("Alumno/a aprobado con nota Excelente")
} else{
    alert("Nota no valida")
}

if(nota >= 1 && nota <= 10) {
    if (nota <= 5){
        alert("Alumno/a desaprobado")
    } else if(nota <= 7){
        alert("Alumno/a aprobado con nota de Bien")
    } else if (nota <= 9) {
        alert("Alumno/a aprobado con nota de Muy Bien")
    } else {
        alert("Alumno/a aprobado con nota Excelente")
    }
} else {
    alert("Nota no valida")
}*/



//CLASE 4

/*function saludar() {
    console.log("Hola, te estoy saludando!")
}

saludar()
saludar()
saludar()
*/

//              valores predeterminados
function sumar(numero1 = 0, numero2 = 0) {
 
    return numero1 + numero2
}
/*
let numero1 = parseFloat(prompt ("Ingrese un numero"))
let numero2 = parseFloat(prompt ("Ingrese otro numero"))

let x = sumar(20, 40)
console.log(x)

function saludar(nombre) {
 return "Hola, me llamo ${nombre} y te estoy saludando" 
}

let cadena = saludar("Francisco")
console.log(cadena)*/

const IVA = 1.21
function calcularIVA(precioProducto) {
    let IVA2 = 1.30
    return precioProdcuto * IVA
}


console.log(calcularIVA(100))


//CLASE 5

let nombrePersonal = "Daniel"
let apellidoPersonal = "Rodriguez"
let edadPersona1 = 18
let pesoPersonal = 89
let sueldoPersonal = "?"

const persona1 = {
    nombre: "Daniel", 
    apelldio: "Rodriguez",
    edad: 18,
    peso: 89,
    sueldo: "?"
}
//Congelo el objeto
Object.freeze(persona1)

persona1.estadoCivil = "Soletero"

console.log(persona1.estadoCivil)
//persona1 = null esto no se hace

persona1.sueldo = 20000
console.log(persona1.estadoCivil)
console.log(persona1.sueldo) //forma mas comun parra acceder a una propiedad
console.log(persona1["sueldo"])