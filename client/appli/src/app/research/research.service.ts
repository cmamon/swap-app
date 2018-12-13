import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class ResearchService {
    properties = [];
    services = [];

    constructor(private http: HttpClient) {}

    searchProperties(data): Observable<any> {
        const url = 'http://localhost:8888/properties/search';
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        const observable: Observable<any> = this.http.post(url, data, httpOptions);

        return observable;
    }

    getProperties() {
        return this.properties;
    }
}
