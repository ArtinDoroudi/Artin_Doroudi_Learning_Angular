import { Component, Input } from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-post-list-item',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})
export class PostListItemComponent {
  @Input() post: any;
  @Input() isEven: boolean = false;
}
