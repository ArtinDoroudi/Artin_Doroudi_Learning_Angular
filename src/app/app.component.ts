import { Component } from '@angular/core';
import { Post } from './shared/models/post';
import {JsonPipe, NgForOf} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PostListComponent} from "./post-list/post-list.component";
import {PostListItemComponent} from "./post-list-item/post-list-item.component";
import {PostService} from "./post.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, PostListComponent, PostListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  specialPost: Post | undefined;
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.getSpecialPost(1);
  }
  getSpecialPost(id: number): void {
    this.postService.getPostById(id).subscribe({
      next: (data: Post | undefined) => this.specialPost = data,
      error: err => console.error('Error fetching post by ID', err),
      complete: () => console.log('Featured post fetch complete!')
    });
  }
}
