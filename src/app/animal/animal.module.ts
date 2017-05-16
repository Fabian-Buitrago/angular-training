import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalRowComponent } from './animal-row/animal-row.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AnimalListComponent],
  declarations: [AnimalListComponent, AnimalRowComponent]
})
export class AnimalModule { }
