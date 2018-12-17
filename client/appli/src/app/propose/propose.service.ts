import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { serverUrl } from '../config/config';

@Injectable({
    providedIn: 'root'
})

export class ProposeService {
    private httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    constructor(private http: HttpClient) { }

    addGood(good) {
        const url = serverUrl + 'properties/';
        console.log(good);
        this.http.post(url, good, this.httpOptions).subscribe((res) => {
            console.log(res);
        });
    }

    addService(service) {
        const url = serverUrl + 'services/';
        console.log(service);
        this.http.post<any>(url, service, this.httpOptions).subscribe((res) => {
            console.log(res);
        });
    }

    addAvailability(goodOrService) {
        const url = serverUrl + 'availabilities/';
        console.log(goodOrService);
        this.http.post<any>(url, goodOrService, this.httpOptions).subscribe((res) => {
            console.log(res);
        });
    }
}
