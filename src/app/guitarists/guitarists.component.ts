import { Component, OnInit } from '@angular/core';

import {GUITARISTS} from '../mock-data';
import {Guitarist} from '../guitarist';
import {log} from 'util';

@Component({
  selector: 'app-guitarists',
  templateUrl: './guitarists.component.html',
  styleUrls: ['./guitarists.component.css']
})
export class GuitaristsComponent implements OnInit {
  constructor() {

  }

  ngOnInit () {
  }

  selectedGuitarist: Guitarist;

  guitarists = GUITARISTS;

  onSelect(guitarist: Guitarist) {
    this.selectedGuitarist = guitarist;
  }

  handleDeleteClick(index: number): void {
    this.guitarist.groups = this.guitarist.groups.filter((item, idx) => idx !== index);
  }

  handleRemove(index: number): void {
    this.guitarists = this.guitarists.filter(
      (item: Guitarist, idx: number) => idx !== index).map(
        (item: Guitarist, idx: number): Guitarist => {
          return {
            ...item,
            id: idx + 1
          };
      });
  }

}
