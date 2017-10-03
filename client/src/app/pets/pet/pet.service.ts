import { Injectable } from '@angular/core'

import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Pet } from './pet.model'

import {APP_API} from '../../app.api'
import {ErrorHandler} from '../../app.error-handler'

@Injectable()
export class PetService {
  constructor(private http: Http){}

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }

  removePet(pet: Pet): Observable<number> {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    return this.http.delete(`${APP_API}/${pet.id}`, new RequestOptions({headers: headers}))
                    .map(success => success.status)
                    .catch(ErrorHandler.handleError)
  }
}
