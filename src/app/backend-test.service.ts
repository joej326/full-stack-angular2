import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendTestService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('http://localhost:3001/home');
  }
}
