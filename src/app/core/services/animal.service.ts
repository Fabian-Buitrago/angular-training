import { Injectable } from '@angular/core';
import { ANIMALS } from "app/shared/mocks/mocks-animals";

@Injectable()
export class AnimalService {

    getAnimals() {
        return ANIMALS;
    }
}