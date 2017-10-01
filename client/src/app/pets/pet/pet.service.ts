import { Injectable } from '@angular/core'

import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { pet } from './pet.model'

import {APP_API} from '../../app.api'

@Injectable()
export class PetService {
  constructor(private http: Http){}

  removePet(pet: pet): Observable<any> {
    let body = JSON.stringify(pet)
    console.log(body)

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    let options = new RequestOptions({
       headers: headers,
       body: body
     })

    return this.http.delete(`${APP_API}`, options)
  }
}
