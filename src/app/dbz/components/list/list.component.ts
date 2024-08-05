import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input("listaPersonajes")
  public characterList: Character[]=[];

  @Output()
  public onDelete:EventEmitter<string>=new EventEmitter();

  onDeletePersonaje(idPersonaje?:string):void{

   console.log(idPersonaje);

   if(!idPersonaje) return;

    this.onDelete.emit(idPersonaje);
  }






}
