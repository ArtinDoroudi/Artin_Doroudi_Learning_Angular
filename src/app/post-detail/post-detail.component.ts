import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/models/post';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import {NgIf} from "@angular/common";
@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  post?: Post;
  constructor(private postService: PostService, private route: ActivatedRoute) {}

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));  // Get the post ID from the route
    this.postService.getPostById(postId).subscribe({
      next: (data: Post | undefined) => this.post = data,
      error: err => console.error('Error fetching post', err)
    });
  }
}
