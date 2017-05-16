import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal-row',
  templateUrl: './animal-row.component.html',
  styleUrls: ['./animal-row.component.css']
})
export class AnimalRowComponent implements OnInit {
  @Input() currentAnimal
  @Output() showMessage = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log()
  }

  onClick(event) {
    this.showMessage.emit(event);
  }

}
