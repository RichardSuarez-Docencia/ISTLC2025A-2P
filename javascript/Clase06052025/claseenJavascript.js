class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
    }

    get getNombreCompleto(){
        return this._nombre+ " " +this._apellido;
    }

    set setNombre(nombre){
        this._nombre=nombre;
    }
}

let ObtenerNombre = new Persona('Juan','Olivera');
console.log(ObtenerNombre.getNombreCompleto);

ObtenerNombre.setNombre="Julian";
console.log(ObtenerNombre.getNombreCompleto);


/*let persona = new Persona('Federico',true)
console.log(persona);

let persona2 = new Persona('Patricio',0)
console.log(persona2);*/