import { Component, OnInit } from '@angular/core';
import { RegisterPetService } from './registerpet.service'
import { RegisterPet } from './registerpet.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registerpet',
  templateUrl: './registerpet.component.html'
})

export class RegisterpetComponent implements OnInit {

  constructor(private registerpetservice: RegisterPetService, private router: Router) { }

  ngOnInit() {
  }

  addPet(registerpet: RegisterPet) {
    this.registerpetservice.addRegisterPet(registerpet).subscribe((id: number) => {
      this.router.navigate(['/successfully-pet'])
      console.log(`Pet incluído: ${id}`)
    })
    console.log(registerpet)
  }
}
