import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iusers } from '../interfaces';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(private http:HttpClient) {}

  getUser () :Observable<Iusers[]> {
     return this.http.get<Iusers[]>("https://jsonplaceholder.typicode.com/users")
  }

}
