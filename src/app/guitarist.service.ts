import { Injectable } from '@angular/core';
import { GUITARISTS } from './mock-data';
import { Guitarist } from './guitarist';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService} from './message.service';

@Injectable()
export class GuitaristService {

  constructor(private messageService: MessageService) { }

  getGuitarists(): Observable<Guitarist[]> {
    this.messageService.add('Fetched');
    return of(GUITARISTS);
  }

  getGuitarist(id: number): Observable<Guitarist> {
    this.messageService.add(`Fitched by id ${id}`);
    return of(GUITARISTS.find(item => item.id === id));
  }
}
