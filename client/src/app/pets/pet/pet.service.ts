import { Injectable } from '@angular/core'

import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { pet } from './pet.model'

import {APP_API} from '../../app.api'

@Injectable()
export class PetService {
  constructor(private http: Http){}

  removePet(pet: pet): Observable<number> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.delete(`${APP_API}`,
                            new RequestOptions({headers: headers}))
                    .map(response => response.json())
                    .map(pet => pet.id)
  }
}
