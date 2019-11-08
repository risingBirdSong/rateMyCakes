import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { cakeI } from '../interfaces';

@Component({
  selector: 'app-selected-cake',
  templateUrl: './selected-cake.component.html',
  styleUrls: ['./selected-cake.component.css']
})
export class SelectedCakeComponent implements OnInit {

  @Input() childSelectedCake: cakeI;
  selectedAverage: number;


  constructor() { }

  ngOnInit() {
    // this.getAverages();
  }

  getAverages() {
    return this.selectedAverage = this.childSelectedCake.ratings.reduce((accum, cur) => {
      return accum += cur.numberrating;
    }, 0) / this.childSelectedCake.ratings.length;
  }

    ngOnChanges(changes: SimpleChanges) {

      // retrieve the quiz variable change info
      var change = changes['childSelectedCake'];

      // only perform the task if the value has been changed
      if (!change.isFirstChange()) {
        // execute the Http request and retrieve the result
        this.getAverages();
      }
  }
}
