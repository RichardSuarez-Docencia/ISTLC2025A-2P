import { IPersona, Producto } from "./interface/IPersona";


/*let persona: {
  nombre?:string;
  edad?: number;
  esEstudiante?:boolean;
} ={
    nombre:"Juan",
    edad:10,
    esEstudiante:true
}
console.log(persona);

let persona2: {
  nombre:string;
  edad: number;
  esEstudiante:boolean;
}

persona2= {
    nombre:"Carlos",
    edad:20,
    esEstudiante:false
}
console.log(persona2);


let persona3: {
  nombre:string;
  edad: number;
  esEstudiante:boolean;
}

persona3={
    nombre:"",
    edad:0,
    esEstudiante:false
}

persona3.nombre="Katherin";
persona3.edad=30;
persona3.esEstudiante=true;

console.log(persona3);*/


/*interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}*/


let persona:IPersona = {
    nombre:"Juan",
    edad:20,
    esEstudiante:true
}
console.log(persona);

let producto:Producto={
    nombre:"Laptop",
    precio:500.30
}
console.log(producto);


//Array
 let arrayNumeros: number[]=[1,2,5,7,4];

 console.log(arrayNumeros);

 let arrayVocales: string[]=['a','e','i','o','u'];

 console.log(arrayVocales);


 let productos:Producto[]= [
    {nombre:'laptop',precio:500},
    {nombre:'radio',precio:10},
    {nombre:'monitor',precio:200}
 ]

 console.log(productos.length);
 console.log(productos[2]);