import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/service/pets.service';
import { Pet } from '../petform/pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  public pets: Pet[] = [];

  constructor(private petService: PetsService) { }

  ngOnInit(): void {
    this.pets = this.petService.getPets();
  }
}
