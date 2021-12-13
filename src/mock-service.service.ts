import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Post } from './app/models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class MockServiceService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<Post[]>{
    return this.httpClient.get<Post[]>('http://localhost:3001/posts')
  }
}
