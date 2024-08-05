import { Component } from "@angular/core";


@Component({
   selector:"app-counter",
   template:`
   <h3>Este es un contador: {{contador}}</h3>

<button (click)="incrementarContador(1)">+1</button>
<button (click)="resetear()" >reset</button>
<button (click)="incrementarContador(0)">-1</button>
   `

})
export class CounterComponent {

    public contador:number= 10;

    incrementarContador(parametro:number):void{
     if(parametro==1){
     this.contador += 1;
     }else{
       this.contador -= 1;
     }
   
    }
    resetear():void{
     this.contador=10;
    }

}