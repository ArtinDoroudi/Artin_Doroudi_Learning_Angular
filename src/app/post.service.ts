import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from './shared/models/post';
import { POSTS } from './data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = POSTS;
  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  // Adding CRUD methods
  //Create: Add Post
  addPost(newPost: Post): Observable<Post[]> {
    this.posts.push(newPost);
    return of(this.posts);
  }

  //Read: Get Post by ID
  getPostById(postId: number): Observable<Post | undefined> {
    const post = this.posts.find(post => post.id === postId);
    return of(post);
  }

  //Update: Edit an existing Post
  updatePost(updatedPost: Post): Observable<Post[]> {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
    return of(this.posts);
  }

  //Delete: Remove a Post
  deletePost(postId: number): Observable<Post[]> {
    this.posts = this.posts.filter(post => post.id !== postId);  // remove the post with the given id
    return of(this.posts);
  }

}
