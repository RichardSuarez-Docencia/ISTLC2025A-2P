import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  imports: [CommonModule],
  templateUrl: './persona.html',
  styleUrl: './persona.css'
})
export class Persona {

 nombre:string='Alexander Dominguez';
fechaHoy:Date= new Date();

persona:{
  nombre:string,
  apellido:string,
  edad:number,
  sueldo:number
 }={
  nombre:'Pepe',
  apellido:'Juarez',
  edad:25,
  sueldo:500
 }

 


}
