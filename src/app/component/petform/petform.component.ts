import { Component } from '@angular/core';
import { PetsService } from 'src/app/service/pets.service';
import { Router } from '@angular/router';

import { Pet } from './pet'

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.css']
})
export class PetformComponent {

  pets = ['Dog', 'Cat', 'Horse', 'Other'];
  colors = ["Black", "White"];
  nameInput: String = "";
  ageInput: Number = 0;
  typeInput: String = "";
  colorInput: String = "";

  constructor(private petService: PetsService, private router: Router) { }

  createNewPet() {
    // console.log(this.nameInput + " " + this.ageInput + " " + this.typeInput + " " + this.colorInput);
    if (this.nameInput !== "" && this.ageInput >= 0 && this.typeInput !== "" && this.colorInput !== "") {
      console.log("Form is Valid");
      if (confirm('All the details are correct?')) {
        this.petService.addPet(new Pet(new Date().toISOString(), this.nameInput, this.ageInput, this.typeInput, this.colorInput));
        alert("Pet added successfully")
        this.nameInput = "";
        this.ageInput = 0;
        this.typeInput = "";
        this.colorInput = "";
        this.router.navigateByUrl('pets');

      }

    }

  }
  // createNewPet(name: string, age: number, type: string, color: string) {
  //   console.log(name + " " + age + " " + type + " " + color);

  // }


}
