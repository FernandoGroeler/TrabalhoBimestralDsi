import { Component, OnInit } from '@angular/core';

import {Pet} from './pet/pet.model'
import {PetsService} from './pets.service'

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html'
})
export class PetsComponent implements OnInit {

  pets: Pet[]

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.petsService.pets().subscribe(pets => this.pets = pets)
  }
}
