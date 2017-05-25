import { Component, OnInit } from '@angular/core';
import { Animal } from "app/shared/interfaces/animal";
import { AnimalService } from "app/core/services/animal.service";

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  public animals: Animal[];
  public active: boolean = false;

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animals = this.animalService.getAnimals()
  }

  listMessage() {
    this.active = !this.active
  }
}
