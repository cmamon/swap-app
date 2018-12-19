import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { serverUrl } from '../config/config';

@Injectable({
    providedIn: 'root'
})

export class ProposeService {
    private httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
        'Something bad happened; please try again later.');
    }

    getGoods() {
        const o: Observable<any> = this.http.get(serverUrl + 'properties/').pipe(
            catchError(this.handleError)
        );
        return o;
    }

    getServices() {
        const o: Observable<any> = this.http.get(serverUrl + 'services/').pipe(
            catchError(this.handleError)
        );
        return o;
    }

    addGood(good) {
        const url = serverUrl + 'properties/';
        return this.http.post<any>(url, good, this.httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    addGoodDescription(goodDesc) {
        const url = serverUrl + 'goods-desc/';
        return this.http.post<any>(url, goodDesc, this.httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    addService(service) {
        const url = serverUrl + 'services/';
        return this.http.post<any>(url, service, this.httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    addServiceDescription(servDesc) {
        const url = serverUrl + 'services-desc/';
        return this.http.post<any>(url, servDesc, this.httpOptions).pipe(
            catchError(this.handleError)
        );
    }

    addAvailability(goodOrService) {
        const url = serverUrl + 'availabilities/';
        return this.http.post<any>(url, goodOrService, this.httpOptions).pipe(
            catchError(this.handleError)
        );
    }
}
