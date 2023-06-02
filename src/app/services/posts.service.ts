import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Iposts } from '../interfaces';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
   

  constructor(private http:HttpClient) { }

  getPost():Observable<Iposts[]>{
   
     return this.http.get<Iposts[]>("https://jsonplaceholder.typicode.com/posts");
  }
}

