import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

@Output()
public onNewCharacter: EventEmitter<Character>= new EventEmitter();

//OnewCharacter Emite un datos de tipos Charact3er

  public personaje:Character={
    name:"",
    power:0
  }

 emitirPersonaje():void{
  console.log(this.personaje);
  //debugger;

   if(this.personaje.name.length===0) return;
  
   this.onNewCharacter.emit(this.personaje);

    this.personaje.name="";
    this.personaje.power=0;
     
 }

}
