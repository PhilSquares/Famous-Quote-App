import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private apiUrl = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/';

  httpOptions = {
    headers: new HttpHeaders({
      "X-RapidAPI-Key": "f5f95ea9a4mshecae1d21cd25a43p1d9efcjsnaf659bae2885",
      "X-RapidAPI-Host": "andruxnet-random-famous-quotes.p.rapidapi.com"
    }),
    params: new HttpParams().set('cat', 'movies').set('count', '1')
  };

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<any> {
    return this.http.post<any>(this.apiUrl, {}, this.httpOptions).pipe(
      catchError(this.handleError) // Add this line
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}