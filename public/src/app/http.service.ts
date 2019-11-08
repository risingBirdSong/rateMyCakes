import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {cakeI, ratingI} from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

   getAllCakes () {
    return this._http.get('/cakes');
   }

   postANewCake(newCake) {
     return this._http.post('/cakes' , newCake)
   }

   postANewRating(newReview: ratingI, id : number){
      // return this._http.post('./')
    return this._http.post(`/cakerating/${id}` , newReview)
   }

  getASingleCake(id : number){
    return this._http.get(`/cakes/${id}`);
  }


  }

