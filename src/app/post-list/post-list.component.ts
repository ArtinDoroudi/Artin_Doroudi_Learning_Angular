import { Component } from '@angular/core';
import {PostListItemComponent} from "../post-list-item/post-list-item.component";
import {NgForOf} from "@angular/common";

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
  displayedColumns: string[] = ['id', 'title', 'content', 'author'];
  posts = [
    { id: 1, title: 'Cyberpunk 2077 - Best Weapons', content: 'Discussion about the best weapons.', author: 'Johnny Silverhand' },
    { id: 2, title: 'Exploring Night City', content: 'Share your best moments in Night City.', author: 'V' },
    { id: 3, title: 'Game Tips and Tricks', content: 'Post your best tips for playing Cyberpunk 2077.', author: 'Panam' },
    { id: 4, title: 'Favorite Side Quests', content: 'Discuss your favorite side quests.', author: 'Judy' }
  ];
}
