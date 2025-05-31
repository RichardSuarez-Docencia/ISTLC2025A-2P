// Arrays en JavaScript

let arregloVocales = ['a','e','i','o','u']
//new Array("a","e","i");

console.log(arregloVocales);
console.log(arregloVocales[0]);
console.log(arregloVocales[1]);
console.log(arregloVocales[2]);
console.log(arregloVocales[3]);
console.log(arregloVocales[4]);

let arregloObjetosPersonas=[
    {
        nombre:"Juan de la torres",
        edad:10
    },
    {
        nombre:"Tahis",
        edad:21
    }
]

let persona = {
        nombre:"Julian",
        edad:35
    }

    arregloObjetosPersonas.push(persona);
    console.log(arregloObjetosPersonas);
    console.log(arregloObjetosPersonas[2].nombre);


    for(let i=0; i < arregloVocales.length; i++){
        console.log(arregloVocales[i]);
    }

    arregloVocales.forEach(elementos => {
        console.log(elementos);
    });

    //arregloObjetosPersonas
      arregloObjetosPersonas.forEach(elementos => {
        console.log(elementos.nombre);
    });