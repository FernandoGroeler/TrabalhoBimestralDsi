import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {PetsComponent} from './pets/pets.component'
import {AboutComponent} from './about/about.component'
import {RegisterpetComponent} from './pets/registerpet/registerpet.component'
import {SuccessfullyPetComponent} from './successfully-pet/successfully-pet.component'
import {PetComponent} from './pets/pet/pet.component'
import {ExcludedPetComponent} from './excluded-pet/excluded-pet.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'registerpet', component: RegisterpetComponent},
  {path: 'pet', component: PetComponent},
  {path: 'successfully-pet', component: SuccessfullyPetComponent},
  {path: 'excluded-pet', component: ExcludedPetComponent}
]
