import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }
  getUsers(): Observable<any> {
    const o: Observable<any> = this.http.get('http://localhost:8888/users');
    return o;
  }

  // Autres méthodes pour du post, delete
}
