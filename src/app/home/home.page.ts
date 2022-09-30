import { Component } from '@angular/core';
import { Person } from './person/person.component';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name:string = "Alberto";
  people:Person[]=[];
  id:number=0;
  
  constructor() {}

  addPerson(n:string){
    this.people.push({
      id: this.id++, name: n,
    });
    
  }

  removePerson(_id:number){
    
    var index = this.people.findIndex((p => p.id == _id)); //vover a preguntar

    if(index >= 0){
      this.people.splice(index,1);
    }
  }

}
