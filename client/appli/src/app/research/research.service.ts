import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class ResearchService {
    properties = [];
    services = [];

    constructor(private http: HttpClient) {}

    search(research: string): Observable<any> {
        const url = 'http://localhost:8888/properties';
        const observable: Observable<any> = this.http.get(url);

        return observable;
    }

    getProperties() {
        return this.properties;
    }
}
