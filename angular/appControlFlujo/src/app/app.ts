import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Padre } from "./padre/padre";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, Padre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private toastr: ToastrService){}
 animales = ['Perro','Gato','Conejo','Cerdo','Pato','Caballo'];

 nombre:string ='';
 edad:number=0;

 agregarEstudiante(){
   let estudiante={
    id:6,
    nombre:this.nombre,
    edad:this.edad,
    foto:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/800px-Brad_Pitt-69858.jpg"
   }
   console.log(estudiante);
  this.listaEstudiantes.push(estudiante);
  this.toastr.success('Registro guardado exitosamente','Éxito',{
    timeOut: 5000,
    closeButton:true,
    positionClass:'toast-top-right',
    progressBar:true
  })
 }
///animales = [];
  listaEstudiantes =[
    {id:1, nombre:'Juan', edad:20,foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/800px-Brad_Pitt-69858.jpg'},
    {id:2, nombre:'Marcelo', edad:23,foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/800px-Brad_Pitt-69858.jpg'},
    {id:3, nombre:'Luis', edad:24,foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/800px-Brad_Pitt-69858.jpg'},
    {id:4, nombre:'Tahis', edad:26,foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/800px-Brad_Pitt-69858.jpg'},
    {id:5, nombre:'Eddy', edad:30,foto:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Brad_Pitt-69858.jpg/800px-Brad_Pitt-69858.jpg'},
  ];

  eliminarEstudiante(posicion:number){
    console.log(`La posicion o index a eliminar es: ${posicion}`);
    this.listaEstudiantes.splice(posicion,1);
     this.toastr.error('Registro eliminado exitosamente','Eliminado',{
    timeOut: 5000,
    closeButton:true,
    positionClass:'toast-top-right',
    progressBar:true
  })
  }

  /*listaEstudiantes: {
    id:number;
    nombre:string;
    edad:number
  }[]=[];*/


  presentarConsola(){
    console.log("debbug");
   // for(let i=0; i > this.animales.length; i++ ){
  //  }
  this.animales.forEach(element => {
    console.log(element);
  });
  }


  isMayorEdad=false;
  isLoged=false;
  isLoggedFuncion(){
    if(this.isLoged){
      console.log(this.isLoged);
    }
    this.isLoged= !this.isLoged;
  }


  colorActual='rojo';
  cambiarColor(nuevoColor:string){
    this.colorActual=nuevoColor;
  }



}
