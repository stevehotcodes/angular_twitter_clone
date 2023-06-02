import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icomments } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }
  
  getComment():Observable<Icomments[]>{
    return this.http.get<Icomments[]>('https://jsonplaceholder.typicode.com/comments')
  }


}
