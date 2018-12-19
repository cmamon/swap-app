import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { serverUrl } from '../config/config';

@Injectable({
    providedIn: 'root'
})

export class AdminService {
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
    };

    deleteUser(user): Observable<any> {
        let email = user.email;
        var o: Observable<any>;
        o = this.http.delete(serverUrl + 'users/' + email, this.httpOptions)
                     .pipe(catchError(this.handleError));
        return o;
    }
}
