import { Injectable } from '@angular/core';
import { GUITARISTS } from './mock-data';
import { Guitarist } from './guitarist';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService} from './message.service';

@Injectable()
export class GuitaristService {

  constructor(private messageServie: MessageService) { }

  getGuitarists(): Observable<Guitarist[]> {
    this.messageServie.add('Fetched');
    return of (GUITARISTS)
  }
}
