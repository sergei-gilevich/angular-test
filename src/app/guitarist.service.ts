import { Injectable } from '@angular/core';
import { GUITARISTS } from './mock-data';
import { Guitarist } from './guitarist';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService} from './message.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class GuitaristService {

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }

  getGuitarists(): Observable<Guitarist[]> {
    this.messageService.add('Fetched');
    return this.http.get<Guitarist[]>(this.guitaristsUrl).
      pipe(
        tap(() => this.log('Fetched')),
        catchError(this.handleError('getGuitarists', []))
      );
  }

  getGuitarist(id: number): Observable<Guitarist> {
    const routeUrl = `${this.guitaristsUrl}/${id}`;
    return this.http.get<Guitarist>(routeUrl).pipe(
      tap(() => this.log(`Fetched by id ${id}`)),
      catchError(this.handleError<Guitarist>(`getGuitarist id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add('Servie ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private guitaristsUrl = 'api/guitarists';

}
