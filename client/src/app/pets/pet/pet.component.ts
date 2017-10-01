import { Component, OnInit, Input } from '@angular/core';

import {pet} from './pet.model'

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html'
})
export class PetComponent implements OnInit {

  @Input() pet: pet

  constructor() { }

  ngOnInit() {
  }

}
