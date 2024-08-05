import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string="Iroman";
  public edad:number=45;

  get capitalizarNombre():string{
    return this.name.toUpperCase();
  }

  getHeroDescripcion():string{
    return `${this.name} - ${this.edad}`;
  }

  cambiarNombre():void{
    this.name="Spiderman";
  }
  cambiarEdad():void{
    this.edad=37;
  }
  resetearForm():void{
    this.name="Iroman";
    this.edad=45;
  }

}
