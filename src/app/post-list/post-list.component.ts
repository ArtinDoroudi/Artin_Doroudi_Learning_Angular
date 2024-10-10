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

}
