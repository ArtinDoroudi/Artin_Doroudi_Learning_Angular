import { Component, OnInit } from '@angular/core';
import {PostListItemComponent} from "../post-list-item/post-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {Post} from "../shared/models/post";
import {PostService} from "../post.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    PostListItemComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = [];


  constructor(private postService: PostService, private router: Router) {}
  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => this.posts = data,
      error:err  => console.error('error fetching posts',err),
      complete: () => console.log('done fetching posts')
    });
  }

  selectedPost: Post | undefined;
  selectPost(post: Post): void {
    this.selectedPost = post;
  }

  goToPost(postId: number): void {
    this.router.navigate([`/posts/${postId}`]).then(r => console.log('Navigated to post', r));
  }
}
