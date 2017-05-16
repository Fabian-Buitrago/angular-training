import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  public animals: Array<object> = [
    { id: 1, name: 'Horse' },
    { id: 2, name: 'Bee' },
    { id: 3, name: 'Spider' },
    { id: 4, name: 'Crab' }
  ];

  public active: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  listMessage() {
    this.active = !this.active
  }
}
