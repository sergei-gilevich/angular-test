import { Component, OnInit } from '@angular/core';
import { Guitarist } from '../guitarist';
import { GuitaristService } from '../guitarist.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  guitarists: Guitarist[] = [];

  constructor(private guitaristService: GuitaristService) { }

  ngOnInit() {
    this.getGuitarists();
  }

  getGuitarists() {
    this.guitaristService.getGuitarists().
      subscribe(guitarists => this.guitarists = guitarists.slice(1, 5));
  }

}
