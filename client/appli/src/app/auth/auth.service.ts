import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private isAuth = false;
    private token: string;
    private authStatusListener = new Subject<boolean>();

    constructor(private http: HttpClient, private router: Router) {}

    createUser(email: string, password: string) {
        const url = 'http://localhost:8888/users/signup';
        const data = {email: email, password: password};
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.http.post(url, data, httpOptions).subscribe( res => {

        });
    }

    login(email: string, password: string) {
        const url = 'http://localhost:8888/users/login';
        const data = {email: email, password: password};
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.http.post<{token: string}>(url, data, httpOptions).subscribe( res => {
            console.log(res);
            this.token = res.token;
            if (res.token) {
                this.authStatusListener.next(true);
                this.isAuth = true;
                this.router.navigate(['/']);
            }
        });
    }

    getToken() {
        return this.token;
    }

    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    getIsAuth() {
        return this.isAuth;
    }

    logout() {
        this.token = null;
        this.isAuth = false;
        this.authStatusListener.next(false);
        this.router.navigate(['/login']);
    }
}
