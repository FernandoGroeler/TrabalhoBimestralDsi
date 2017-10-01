import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {pet} from "./pet/pet.model"

import {APP_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class PetsService {
  constructor(private http: Http){}

  pets(): Observable<pet[]> {
    return this.http.get(`${APP_API}`).map(response => response.json()).catch(ErrorHandler.handleError)
  }
}
