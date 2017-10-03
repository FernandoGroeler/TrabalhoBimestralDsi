import { Component, OnInit, Input } from '@angular/core';
import { PetService } from './pet.service'
import { Pet } from './pet.model'

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html'
})

export class PetComponent implements OnInit {

  @Input() pet: Pet

  constructor(private petService: PetService) { }

  ngOnInit() {
  }

  removePet(pet: Pet) {
    this.petService.removePet(pet).subscribe()
  }
}
