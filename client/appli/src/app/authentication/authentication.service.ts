import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    isLoggedIn = false;

    constructor(private http: HttpClient) {}

    check(login: string, password: string) {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type':  'application/json' })
        };

        let url = 'http://localhost:8888/users/login';
        let formData = { login, password };
        // let valid = false;

        return this.http.post(url, formData, httpOptions).pipe(map(user => {
            return user;
        }));

        // return valid;
    }
}
