import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'pets',
    component: PetsComponent,
  },
  {
    path: 'pets/new',
    component: PetEditComponent,
  },
  {
    path: 'pets/:id/edit',
    component: PetEditComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
