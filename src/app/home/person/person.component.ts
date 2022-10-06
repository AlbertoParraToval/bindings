import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//
export interface Person{
  id:number;
  name:string;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  private _data:Person;

  //Esto hace lo mismo que un this.set.data.
  //En este caso cargo mi variable _data con los datos del campo que me llega desde el home component.
  @Input('data') set data(p:Person){
    this._data = p;
  }

  @Output() onremove = new EventEmitter();

  onRemove(){
    this.onremove.next(this._data.id);
  }

  //Devuelve la informacion de la variable data (que contiene una persona.)
  get dataPerson(){
    return this._data;
  }

  constructor() { }

  ngOnDestroy():void{}

  ngOnInit() {}

}
