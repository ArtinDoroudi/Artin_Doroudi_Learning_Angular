import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './shared/models/post';
import { POSTS } from './data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }


}
