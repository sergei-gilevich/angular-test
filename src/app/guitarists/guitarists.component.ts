import { Component, OnInit } from '@angular/core';

import {GUITARISTS} from '../mock-data';
import {Guitarist} from '../guitarist';

@Component({
  selector: 'app-guitarists',
  templateUrl: './guitarists.component.html',
  styleUrls: ['./guitarists.component.css']
})
export class GuitaristsComponent implements OnInit {

  constructor() { }

  ngOnInit () {
  }

  selectedGuitarist: Guitarist;

  guitarists = GUITARISTS;

  onSelect(guitarist: Guitarist) {
    this.selectedGuitarist = guitarist;
  }

}
