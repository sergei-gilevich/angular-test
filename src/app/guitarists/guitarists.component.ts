import { Component, OnInit } from '@angular/core';

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

  guitarist: Guitarist = {
    id: 1,
    name: 'Angus Yang',
    groups: ['AC/DC', 'test']
  };
}
