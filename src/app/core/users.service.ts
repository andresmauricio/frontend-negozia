import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API: string;

  constructor(private http: HttpClient) { 
    this.API = environment.api;
  }

  public getUsers(): Observable<any> {
    return this.http.get(this.API);
  }

  public saveUser(payload): Observable<any> {
    return this.http.post(this.API, payload);
  }
}
