import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pet } from '../component/petform/pet';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  public petsList: Pet[] = [];

  constructor() { }

  getPets() {
    return this.petsList;
  }

  addPet(pet: Pet) {
    this.petsList.push(pet);
  }
}
