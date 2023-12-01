import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css'],
})
export class PetEditComponent implements OnInit {
  pet: Pet = new Pet();

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location,
    private router: Router
  ) {}

 async ngOnInit() {
    const urlId = this.route.snapshot.paramMap.get('id');
    if (urlId) {
      const id = parseInt(urlId);
      const pet = await this.petService.getPet(id);
      if (pet) {
        this.pet = pet;
      }
    }
  }

  async handleSave(pet: Pet) {
    if (this.pet.id) {
      await this.petService.updatePet(this.pet.id, pet);
      this.location.back();
    } else {
      const newPet = await this.petService.addPet(pet);
      this.router.navigate(['/pets']);
    }
  }
}
