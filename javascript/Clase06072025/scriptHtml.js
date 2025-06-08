

let titulo =document.getElementById("titulo").innerHTML;
console.log("Mostrar TItulo");
console.log(titulo);

//document.getElementById("titulo").innerHTML= "Ahora me llamo diferente";

function calcular(){
    let numUno = parseFloat(document.getElementById("numUno").value);
    let numDos = parseFloat(document.getElementById("numDos").value);
    let operador= document.getElementById("operador").value;

    switch(operador){
        case "+":
        let suma = numUno + numDos
            console.log(numUno);
            console.log(numDos);
            console.log("La suma es :"+ suma);
            document.getElementById("suma").innerHTML=`La suma es: ${suma}`;
        break;
        case "-":
        let resta = numUno - numDos
            console.log(numUno);
            console.log(numDos);
            console.log("La resta es :"+ resta);
            document.getElementById("suma").innerHTML=`La resta es: ${resta}`;
        break;
        case "*":
        let multiplicacion = numUno * numDos
            console.log(numUno);
            console.log(numDos);
            console.log("La multiplicacion es :"+ multiplicacion);
            document.getElementById("suma").innerHTML=`La multiplicacion es: ${multiplicacion}`;
        break;
        case "/":
        let division = numUno / numDos
            console.log(numUno);
            console.log(numDos);
            console.log("La division es :"+ division);
            document.getElementById("suma").innerHTML=`La resta es: ${division}`;
        break;
        default:
            document.getElementById("suma").innerHTML=`el operador no es válido`;

    }

    
}
