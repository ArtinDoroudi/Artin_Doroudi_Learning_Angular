import { Component, Input } from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-post-list-item',
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css'
})
export class PostListItemComponent {
  @Input() post: any;
  @Input() isEven: boolean = false;
}
