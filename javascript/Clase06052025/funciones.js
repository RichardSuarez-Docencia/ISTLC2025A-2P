// Mi primera funcion en JavaScript

/*function miprimeraFuncion(){
    console.log("Estoy ejecutando Mi primera funcion en JavaScript");
}

miprimeraFuncion();
miprimeraFuncion();
miprimeraFuncion();
miprimeraFuncion();
miprimeraFuncion();
miprimeraFuncion();*/

// Función standár , es la más común
// funcion para sumar
function funcionSumar(a,b){  
    return a+b;
}

//funcionSumar();
let nota1 = funcionSumar(4,4);
console.log("La suma es: "+nota1);

let nota2 =funcionSumar(5,5);
console.log("La suma es: " + nota2);

let nota3 =funcionSumar(7,7);
console.log("La suma es: " + nota3);

// funcion para restar
function funcionRestar(a,b){  
    return a-b;
}
console.log("La resta es: "+funcionRestar(10,8));

// funcion para funcionMultiplicar
function funcionMultiplicar(a,b){  
    return a*b;
}
console.log("La Multiplicacion es: "+funcionMultiplicar(10,8));

// funcion para restar
function funcionDividir(a,b){  
    return a/b;
}
console.log("La Division es: "+funcionDividir(10,8));

// Funcion de tipo expresion
//Suma
let sumar = function(a, b) { 
    return a + b 
};

let resultado = sumar(1,2);
console.log(resultado);

//Funcion Flecha

let sumaFFlecha = (a,b) => a+b;
console.log(sumaFFlecha(99,1));

let restaFFlecha = (a,b) => a-b;
console.log(restaFFlecha(99,1));

let MultiplicacionFFlecha = (a,b) => a*b;
console.log(MultiplicacionFFlecha(99,1));

let DivisionFFlecha = (a,b) => a/b;
console.log(DivisionFFlecha(99,1));

let sumaFFlechaLlaves = (a,b) => {
    console.log("Valores de entrada: "+a);
    console.log("Valores de entrada: "+b);
    return a+b
};

console.log(sumaFFlechaLlaves(99,1));

const cuadrado = x => x * x;
console.log(cuadrado(4));


//Funcion anonima

setTimeout(function(){
    console.log("Este mensaje se ejecuto luego de 5 segundos");
},5000);

setTimeout(() => {
    console.log("Este mensaje se ejecuto luego de 9 segundos");
},9000);