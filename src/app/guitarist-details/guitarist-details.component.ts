import { Component, OnInit, Input } from '@angular/core';
import {Guitarist} from '../guitarist';

@Component({
  selector: 'app-guitarist-details',
  templateUrl: './guitarist-details.component.html',
  styleUrls: ['./guitarist-details.component.css']
})
export class GuitaristDetailsComponent implements OnInit {
  @Input() guitarist: Guitarist;
  @Input() inputFun: Function;
  constructor() { }

  ngOnInit() {
  }

}
