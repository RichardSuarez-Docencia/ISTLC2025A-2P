import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hijo } from "./hijo/hijo";

@Component({
  selector: 'app-padre',
  imports: [FormsModule, Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})
export class Padre {
  numeroA:string ='';
  numeroB: string='';
  resultado:number = 0;


  funcionRecibirDatosDeMiHijo(valor:number){
    this.resultado=valor;
  }

}
