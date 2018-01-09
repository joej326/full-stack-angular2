import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BackendTestService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get('http://localhost:3001/cats');
  }

  postData(data) {
    console.log('should be posting', data);
    this.http.post('http://localhost:3001/cats', data).subscribe();
  }

  deleteUser(user) {
    console.log('should be deleting', user);
    this.http.delete('http://localhost:3001/cats', user).subscribe();
  }
}
