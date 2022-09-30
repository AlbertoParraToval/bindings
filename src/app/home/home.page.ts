import { Component } from '@angular/core';
import { Person } from "./person/person.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  name: string = 'Alfonso';
  age: number;
  constructor() {}
  id: number = 0;
  people: Person[] = [];

  addPerson(n: string) {
    this.people.push({
      id: this.id++,
      name: n,
      age: this.age,
    });
  }

  removePerson(id: number) {
    var index = this.people.findIndex((p) => {
      return p.id == id;
    });
    if ((index) => 0) {
      this.people.splice(index, 1);
    }
  }
}
