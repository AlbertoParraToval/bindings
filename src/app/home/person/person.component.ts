import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

export interface Person {
  age: any;
  id: number;
  name: string;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})

//Declaramos un evento de

export class PersonComponent implements OnInit, OnDestroy {
  private _data: Person;

  @Output() onremove = new EventEmitter;
  
  @Input('data') set data(n: Person) {
    this._data = n;
  }

  get name(): Person {
    return this._data;
  }

  constructor() {

  }

  ngOnDestroy(): void {}

  ngOnInit() {

  }

  onRemove() {
    this.onremove.next(this.data.id);
  }

  

}
