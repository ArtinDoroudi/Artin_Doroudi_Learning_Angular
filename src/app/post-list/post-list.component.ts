import { Component } from '@angular/core';
import {PostListItemComponent} from "../post-list-item/post-list-item.component";
import {NgForOf} from "@angular/common";
import {Post} from "../shared/models/post";
import {PostService} from "../post.service";
@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [
    PostListItemComponent,
    NgForOf
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  posts: Post[] = [];
  constructor(private postService: PostService) {}
  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => this.posts = data,
      error:err  => console.error('error fetching posts',err),
      complete: () => console.log('done fetching posts')
    });
  }
}
