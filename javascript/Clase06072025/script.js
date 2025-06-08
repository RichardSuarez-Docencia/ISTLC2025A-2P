
console.log("Estoy feliz porque voy  hacer mi primer consumo http desde js");
//const fetch = require('node-fetch');

// Ralizamos peticion http de tipo GET
fetch('http://apicodersnet.runasp.net/api/Generos')
 .then(response => response.json())
 .then(data => console.log('Response: ', data))
 .catch(error => console.log('ups.. hubo un error: '+error))


 fetch('http://apicodersnet.runasp.net/api/Generos',{
    method: "POST",
    headers :{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        nombre : "Ciencia Ficcion ISTLC"
    })
 }).then(respuesta => respuesta.json())
 .then(data => console.log('Response: ', data))
 .catch(error => console.log('ups.. : '+error))