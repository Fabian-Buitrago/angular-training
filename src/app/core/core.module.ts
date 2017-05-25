import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalService } from "app/core/services/animal.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[AnimalService]
})
export class CoreModule { }
