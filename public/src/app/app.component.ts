import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';
import { cakeI, ratingI } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'public';
  allCakes: cakeI[] = [];
  newCake : cakeI;
  newrating : ratingI;
  clickedCake : cakeI;

        // tslint:disable-next-line: no-debugger
  constructor(private _httpService: HttpService, ){}
    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
      this.getAllCakes();
      this.newCake = {bakername : "", imageurl : "", _id : null, ratings : []};
      this.newrating = {content : null, numberrating : 0};
    }

    getAllCakes(){
      // tslint:disable-next-line: no-debugger
      let cakeObservable = this._httpService.getAllCakes();
      cakeObservable.subscribe((theCakes : cakeI[]) => {
        this.allCakes = theCakes;
      });
    }

    onCakeSubmit(){
      let observable = this._httpService.postANewCake(this.newCake);
      observable.subscribe((data : cakeI) => {
        console.log("___ new cake submit return data", data);
        this.allCakes.push(data);
        this.newCake = {bakername : "", imageurl : "", _id : null, ratings : []};
      });
    }

    onRatingSubmit(theId : number){
      // let observable = this._httpService
      console.log('this is a new rating --->', this.newrating, 'this is its cake id', theId);
      let observable = this._httpService.postANewRating(this.newrating , theId);
      observable.subscribe((data : any) => {

        console.log('the returned data coming back from posting new review', data);
        this.newrating = {content : null, numberrating : null};
        this.clickTheCake(theId);
      })
    }

    getAverages () {
      return this.selectedAverage = this.clickedCake.ratings.reduce((accum, cur) => {
        return accum += cur.numberrating;
      }, 0) / this.clickedCake.ratings.length;
    }

    clickTheCake(id : number){
      console.log('clicke med');
      let observable = this._httpService.getASingleCake(id);
      observable.subscribe((data : cakeI) =>{
        this.clickedCake = data[0];
        console.log('clicked cake data', this.clickedCake)
        this.getAllCakes();
        this.getAverages();
        console.log(this.getAverages, '___ avgs')
      })
    }

}
