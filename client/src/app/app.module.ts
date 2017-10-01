import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PetsComponent } from './pets/pets.component';
import { PetComponent } from './pets/pet/pet.component';
import { PetsService } from './pets/pets.service';
import { RegisterpetComponent } from './pets/registerpet/registerpet.component';
import { InputComponent } from './shared/input/input.component';
import { RegisterPetService } from './pets/registerpet/registerpet.service';
import { SuccessfullyPetComponent } from './successfully-pet/successfully-pet.component';
import { PetService } from './pets/pet/pet.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PetsComponent,
    PetComponent,
    RegisterpetComponent,
    InputComponent,
    SuccessfullyPetComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PetsService, RegisterPetService, PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
