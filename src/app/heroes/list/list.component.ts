import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public listHeroes:string[]=["Spiderman","Hulk","Batman","Deadpool","Iroman"];
  public heroeEliminado?:string;
  public titulo:string="Julio";

   borrarUltimoHeroe():void{
    this.heroeEliminado=this.listHeroes.pop();
   }

}
