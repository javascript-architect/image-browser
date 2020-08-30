import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Photo } from '../../models/Photo';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
})
export class ImageCardComponent {
  @Input()
  photo: Photo;

  @Output()
  liked: EventEmitter<Photo> = new EventEmitter<Photo>();

  toggleLike(liked: boolean, $event: any): void {
    this.liked.emit({ ...this.photo, like: liked });
    $event.stopPropagation();
  }
}
