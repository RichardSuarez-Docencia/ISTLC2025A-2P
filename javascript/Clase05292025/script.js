let nombreA = "Juan"; //String
let edad= 21;        //number
console.log(typeof nombreA);
console.log(typeof edad);
console.log(`Mi nombre es ${nombreA} y mi edad es ${edad} años edad`);
console.log("Mi nombre es "+nombreA + " y tengo "+ edad +" años de edad");

let persona = {
    nombre:"Luis",
    apellido:"Olvera",
    edad:14,
    telefono:"0951489751"
}

console.log( persona);
console.log(`Mi nombre es ${persona.nombre}`);
console.log(`Mi apellido es ${persona.apellido}`);
console.log(`Mi Edad es ${persona.edad}`);
console.log(`Mi telefono es ${persona.telefono}`);

let isMayorEdad = true;
console.log(typeof isMayorEdad);

isMayorEdad = false;
console.log(typeof isMayorEdad);

function saludar() {
    return "Hola Mundo JS";
}

console.log(typeof saludar());


class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

let suma;
suma = "dsdsds"

console.log(typeof suma);

let y = null; //Ausencia de valor
console.log(typeof y);

// var, let y const -> tipo de declaracion de variable
var nombre = "Ana"; 
var nombre = "Pedro"; //  Permitido (pero confuso) nombre = "Ana";
console.log(nombre); // "Ana"

let apellidoA = "Ana"; 
apellidoA = "Pedro"; //  Permitido (pero confuso) nombre = "Ana";
console.log(apellidoA);

const PI = 3.14159; // const PI = 3.14; //Error: no se puede redeclarar // PI = 3.14; //Error: no se puede cambiar 
//PI=4;
//PI = 3.1698;
console.log(PI); // 3.14159


