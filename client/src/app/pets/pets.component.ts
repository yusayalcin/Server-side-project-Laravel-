import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  public pets: Pet[] = [];
  public selectedPet: Pet | null = null;

  constructor(private petService: PetService) {}

  async ngOnInit() {
    this.pets = await this.petService.getPets();
  }


  handleSave(pet: Pet) {
    Object.assign(this.selectedPet, pet);
    this.selectedPet = null;
  }
}