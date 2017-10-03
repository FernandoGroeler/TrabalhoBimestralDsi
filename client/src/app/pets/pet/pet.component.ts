import { Component, OnInit, Input } from '@angular/core';
import { PetService } from './pet.service'
import { Pet } from './pet.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html'
})

export class PetComponent implements OnInit {

  @Input() pet: Pet

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }

  removePet(pet: Pet) {
    this.petService.removePet(pet).subscribe((id: number) => {
      this.router.navigate(['/excluded-pet'])
      console.log(`Pet excluído: ${id}`)
    })
    console.log(pet)
  }
}
