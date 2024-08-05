import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import  {v4 as identificador} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {
   
    personjae: Character[] = [
    { idPersonaje:identificador(), name: "krilin", power: 1000 }, 
    { idPersonaje:identificador(),  name: "goku", power: 9500 },  
    { idPersonaje:identificador(),  name:"vegeta",power:18000},
    { idPersonaje:identificador(),  name:"picoro",power:5000},
    { idPersonaje:identificador(),  name:"cell",power:90000}];


    escucharEvento(personaje:Character):void{
       console.log("Main Page", personaje);
       const newCharacter:Character={
        idPersonaje:identificador(),
        ...personaje
       };
       this.personjae.push(newCharacter);
    }
    // eliminarElemento(indice:number):void{
    //     console.log("MaingPage",indice);
    //     this.personjae.splice(indice,1);
    // }
    eliminarElemento(id:string):void{

      //  this.personjae.splice(indice,1);
      this.personjae= this.personjae.filter( p=> p.idPersonaje!==id);
    }
    
}