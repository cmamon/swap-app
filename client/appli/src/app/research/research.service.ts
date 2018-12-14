import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable()
export class ResearchService {
    properties = [];
    services = [];

    constructor(private http: HttpClient) {}

    searchProperties(data) {
        this.services.splice(0, this.services.length);
        this.properties.splice(0, this.properties.length);
        const url = 'http://localhost:8888/properties/search';
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.http.post(url, data, httpOptions).subscribe((res: []) => {
            this.properties.push(...res);
        });
    }

    searchServices(data) {
        this.services.splice(0, this.services.length);
        this.properties.splice(0, this.properties.length);
        const url = 'http://localhost:8888/properties/search';
        const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
        this.http.post(url, data, httpOptions).subscribe((res: []) => {
            this.services.push(...res);
        });
    }

    getProperties() {
        return this.properties;
    }

    getServices() {
        return this.services;
    }
}
