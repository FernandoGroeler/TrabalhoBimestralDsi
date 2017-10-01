import { Component, OnInit, Input } from '@angular/core';
import { PetService } from './pet.service'
import {pet} from './pet.model'

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html'
})
export class PetComponent implements OnInit {

  @Input() pet: pet

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

  removePet(pet: pet) {
    this.petService.removePet(pet)
    console.log(pet)
  }
}
