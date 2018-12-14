import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    isLoggedIn = false;

    constructor(private http: HttpClient) {}

    check(login: string, pwd: string): boolean {

        // Verification
        console.log(login, pwd);
        return true;
    }
}
