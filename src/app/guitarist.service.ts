import { Injectable } from '@angular/core';
import {GUITARISTS} from './mock-data';
import {Guitarist} from './guitarist';

@Injectable()
export class GuitaristService {

  constructor() { }

  getGuitarists(): Guitarist[] {
    return GUITARISTS;
  }
}
