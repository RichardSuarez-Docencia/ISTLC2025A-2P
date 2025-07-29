import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo {

  @Input() numeroA:string='';
  @Input() numeroB:string='';
  @Output() resultado= new EventEmitter<number>

  sumar(){
    console.log("Enviaste esta información desde el componente Padre hacia el hijo");
    console.log(this.numeroA);
    console.log(this.numeroB);
    this.resultado.emit(parseFloat(this.numeroA)+parseFloat(this.numeroB));
  }

  restar(){
    console.log("Enviaste esta información desde el componente Padre hacia el hijo");
    console.log(this.numeroA);
    console.log(this.numeroB);
    this.resultado.emit(parseFloat(this.numeroA)-parseFloat(this.numeroB));
  }

}
