import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetformComponent } from './component/petform/petform.component';
import { PetsComponent } from './component/pets/pets.component';

const routes: Routes = [
  { path: 'petform', component: PetformComponent },
  { path: 'pets', component: PetsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
