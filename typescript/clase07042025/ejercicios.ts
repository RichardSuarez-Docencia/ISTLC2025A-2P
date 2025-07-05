
function suma(a:number, b:number) : number{
    return a + b;
}

console.log(suma(2, 4));


let valorA : number = 0;
/////valorA="7";
console.log(valorA);

let mensaje : string="Hola mundo";
///mensaje=8;
console.log(mensaje);

let valorBoleano : boolean;
valorBoleano =false;

console.log(valorBoleano);
valorBoleano=true;
console.log(typeof valorBoleano);

let valorCualquiercosa :any = true;

valorCualquiercosa=3
console.log(typeof valorCualquiercosa);
valorCualquiercosa="Hola mundo";
console.log(typeof valorCualquiercosa);




function edadpersona(edad:number,nombre?:String): void{
    if(nombre){
          console.log(`Hola ${nombre} tu edad es ${edad}`);
    }else{
         console.log(`Hola, tu edad es ${edad}`);
    }
}

edadpersona(15,"Juan");
edadpersona(15);



function sumar(a:number,b:number=5):number{
    return a+b;
}

console.log(sumar(100,200));
console.log(sumar(100));