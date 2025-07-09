import { Producto } from './scripttest';

let persona: {
  nombre: string;
  edad: number;
  esEstudiante: boolean;
};

persona = {
  nombre: "Ana",
  edad: 30,
  esEstudiante: false
};


let producto: Producto={
    id:1,
    nombre:"",
    disponible:true,
    precio:2.30
}

let producto2: Producto = {
  id: 0,
  nombre: '',
  precio: 0,
  disponible: false
};

producto2.id=1;
producto2.nombre=""






let productos: Producto[] = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 1500,
    disponible: true
  },
  {
    id: 2,
    nombre: "Mouse",
    precio: 20,
    disponible: false
  }
];




const nums: number[] = [1, 2, 3, 4, 5];
const indice= nums.includes(3)



console.log(indice);


 nums.forEach(n => console.log(n))

const doble =nums.map(n => n * 2)
console.log(doble);


const filtrado=nums.filter(n => n > 3)
console.log(filtrado);

const orden= nums.sort((a, b) => a - b)
console.log(orden);