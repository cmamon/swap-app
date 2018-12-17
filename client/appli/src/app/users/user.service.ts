import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { serverUrl } from '../config/config';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) { }
    getUsers(): Observable<any> {
        var o: Observable<any> = this.http.get(serverUrl + 'users');
        return o;
    }

    getUserByEmail(email: string): Observable<any> {
        var o: Observable<any> = this.http.get(serverUrl + 'users/' + email);
        return o;
    }
}
