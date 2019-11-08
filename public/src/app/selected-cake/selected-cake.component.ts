import { Component, OnInit, Input } from '@angular/core';
import {cakeI} from '../interfaces';

@Component({
  selector: 'app-selected-cake',
  templateUrl: './selected-cake.component.html',
  styleUrls: ['./selected-cake.component.css']
})
export class SelectedCakeComponent implements OnInit {

  @Input() childSelectedCake: cakeI;
  @Input() averageRating : number;


  constructor() { }

  ngOnInit() {
    // this.getAverages();
  }
}
