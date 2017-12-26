import { Component, OnInit } from '@angular/core';
import {Guitarist} from '../guitarist';
import {GuitaristService} from '../guitarist.service';
import { Injectable } from '@angular/core';
import {GUITARISTS} from '../mock-data';
import {Guitarist} from '../guitarist';
@Injectable()
export class GuitaristService {

  constructor() { }

  getHeroes(): Guitarist[] {
    return GUITARISTS;
  }
}

@Component({
  selector: 'app-guitarists',
  templateUrl: './guitarists.component.html',
  styleUrls: ['./guitarists.component.css']
})
export class GuitaristsComponent implements OnInit {
  constructor(private guitaristsService: GuitaristService) { }

  ngOnInit () {
    this.getGuitarists();
  }

  selectedGuitarist: Guitarist;

  guitarists: Guitarist[];

  getGuitarists(): void {
    this.guitarists = this.guitaristsService.getGuitarists();
  }

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
