import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

export interface Person {
  age: number;
  id: number;
  name: string;
}

@Component({
  selector: 'app-person', //etiqueta
  templateUrl: './person.component.html', //etiqueta html
  styleUrls: ['./person.component.scss'], //etiqueta scss
})
export class PersonComponent implements OnInit, OnDestroy {
  private _data: Person;

  @Output() onremove = new EventEmitter();

  //Para ver los puntos de ruptura y ver como cambian las variables durante el proceso de añadir y eliminar.
  //@Input('data') -> No tienes control sobre la variable

  @Input('data') set data(n: Person) {
    this._data = n;
  }

  get data(): Person {
    return this._data;
  }

  constructor() {}

  ngOnDestroy(): void {}

  ngOnInit() {}

  onRemove() {
    this.onremove.next(this.data.id);
  }
}
