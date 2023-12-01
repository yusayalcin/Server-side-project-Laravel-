import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Pet } from './pet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // 'X-Requested-With': 'XMLHttpRequest',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private petsUrl = 'http://localhost:8000/api/pets';
  constructor(private http: HttpClient) {}

  async getPets() {
    return await lastValueFrom(this.http.get<Pet[]>(this.petsUrl));
  }
  
  async getPet(id: number) {
    return await lastValueFrom(this.http.get<Pet>(`${this.petsUrl}/${id}`));
  }

  async updatePet(id: number, modifiedPet: Pet) {
    return await lastValueFrom(this.http.patch<Pet>(`${this.petsUrl}/${id}`, modifiedPet, httpOptions));
  }

 async addPet(newPet: Pet) {
    return await lastValueFrom(this.http.post<Pet>(this.petsUrl, newPet, httpOptions));
  }
 
}
