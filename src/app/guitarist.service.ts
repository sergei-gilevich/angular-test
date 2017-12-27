import { Injectable } from '@angular/core';
import { GUITARISTS } from './mock-data';
import { Guitarist } from './guitarist';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService} from './message.service';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  updateGuitarist(guitarist: Guitarist): Observable<any> {
    return this.http.put(this.guitaristsUrl, guitarist, httpOptions)
      .pipe(
        tap(() => this.log(`update guitarist id=${guitarist.id}`)),
        catchError(this.handleError<any>('Update'))
      );
  }

  addGuitarist(guitarist: Guitarist): Observable<Guitarist> {
    return this.http.post<Guitarist>(this.guitaristsUrl, guitarist, httpOptions)
      .pipe(
        tap((guitarist_: Guitarist) => this.log(`added ${guitarist_.name}`)),
        catchError(this.handleError<Guitarist>('addGuitarist'))
      );
  }

  deleteGuitarist(guitarist: Guitarist | number): Observable<Guitarist> {
    const id = isNaN(guitarist) ? guitarist.id : guitarist;
    const url = `${this.guitaristsUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        tap(() => this.log(`Delete guitarist id=${id}`)),
        catchError(this.handleError<Guitarist>('deleteGuitarist'))

      );
  }

  serachByName(value: string): Observable<Guitarist[]> {
    if (!value.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`api/guitarists/?name=${value}`)
      .pipe(
        tap(() => this.log(`founded guitarists matching ${value}`)),
        catchError(this.handleError<Hero[]>('searchGuitarists []'))
      );
  }

  private log(message: string) {
    this.messageService.add('Service ' + message);
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
