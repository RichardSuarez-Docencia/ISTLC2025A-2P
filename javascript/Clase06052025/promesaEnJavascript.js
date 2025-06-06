
let promesa = new Promise((resolve,reject) =>{

    let suma = 5+5;
    if(suma > 10){
      resolve("Voy a enviar mensaje exitoso");
    }else{
        reject("La condicion no cumple");
    }

});





promesa.then(respuesta => console.log(respuesta)).catch(respuesta => console.log(respuesta));


function crearPromesa(valor) {
  return new Promise((resolve, reject) => {
    if (valor === true) {
      resolve("✅ Todo salió bien"); //then
    } else {
      reject("❌ Algo salió mal");  // catch
    }
  });
}

crearPromesa(false).then(respu => console.log(respu)).catch(error => console.log(error));




function tareaAsincronica() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let exito = false;
      if (exito) {
        resolve("Tarea completada");
      } else {
        reject("Falló la tarea");
      }
    }, 9000); // espera 2 segundos
  });
}
tareaAsincronica().then(res => console.log(res)).catch(err => console.log(err));
