import { Injectable } from '@angular/core'

import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { RegisterPet } from './registerpet.model'

import {APP_API} from '../../app.api'

@Injectable()
export class RegisterPetService {
  constructor(private http: Http){}

  addRegisterPet(registerpet: RegisterPet): Observable<number> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.post(`${APP_API}/pets`,
                          JSON.stringify(registerpet), new RequestOptions({headers: headers}))
                    .map(response=> response.json())
                    .map(registerpet => registerpet.id)
  }
}
