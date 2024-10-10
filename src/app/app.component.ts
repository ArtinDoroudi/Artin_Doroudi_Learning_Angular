import { Component } from '@angular/core';  // You need to import Component
import { Post } from './shared/models/post';  // Import the Post interface
import {JsonPipe, NgForOf} from "@angular/common";
import { RouterOutlet } from '@angular/router';
import {PostListComponent} from "./post-list/post-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, PostListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  posts: Post[] = [
    {
      id: 1,
      title: 'Good Morning, Night City!',
      content: 'This is a forum about Cyberpunk 2077.',
      author: 'V',
      isPinned: true
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'This is the second post.',
      author: 'V'
    },
    {
      id: 3,
      title: 'Third Post',
      content: 'This is the third post.',
      author: 'V'
    },
    {
      id: 4,
      title: 'Fourth Post',
      content: 'This is the fourth post.',
      author: 'V'
    },
    {
      id: 5,
      title: 'Fifth Post',
      content: 'This is the fifth post.',
      author: 'V'
    },
    {
      id: 6,
      title: 'Am I a ghost?',
      content: 'Or what?',
      author: 'Johnny Silverhand'
    }
  ];
}
