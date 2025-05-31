
let numeroA="5";

if(isNaN(numeroA)){
    console.log("No es un valor numerico");
}else{
    let valorParseado= Number(numeroA);
    console.log(valorParseado);
    let edadDeNino = valorParseado == 5 ? "Es un ninio todavia" : "es adolescente";
    console.log(edadDeNino);
    console.log(valorParseado.toString());
}


let diasSemana=1;
switch(diasSemana){
   case 1: console.log("Lunes");
   break;
   case 2: console.log("Martes");
   break;
   case 3: console.log("Miercoles");
   break;
   case 4: console.log("Jueves");
   break;
   case 5: console.log("Viernes");
   break;
   case 6: console.log("Sabado");
   break;
   case 7: console.log("Domingo");
   break;
   default: console.log("ESta fuera del rango");
}
