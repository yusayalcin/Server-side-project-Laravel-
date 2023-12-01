import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  appName = 'My very best pet tracker';

  public pets: Pet[] = [];
  public selectedPet: Pet | null = null;

  constructor(private petService: PetService) {}

  async ngOnInit() {
    this.pets = await this.petService.getPets();
  }

  handleDeath(pet: Pet) {
    Object.values(pet.death).filter((item) => item == null).length
  }

}
