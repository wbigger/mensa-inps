import { Injectable } from '@angular/core';
import { Dish } from './dish';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class DishService {

  private _dishesUrl = './api/dishes.json'

  constructor(private _http: HttpClient) { }

  getDishes() : Observable<Dish[]> {
    return this._http.get<Dish[]>(this._dishesUrl)
    .do(data => console.log('Dishes:' + JSON.stringify(data)))
    .catch(this.handleError)
  }

  private handleError(err: HttpErrorResponse)  {
    // Manage the error!
    let errMessage = err.status
    console.log(errMessage)
    return Observable.throw('Received error: '+errMessage)
  }

}
