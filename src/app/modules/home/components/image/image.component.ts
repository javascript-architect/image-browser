import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Photo } from '../home/home.component';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
})
export class ImageComponent {
  @Input()
  photo: Photo;

  @Output()
  liked: EventEmitter<Photo> = new EventEmitter<Photo>();

  toggleLike(liked: boolean) {
    this.liked.emit({ ...this.photo, like: liked });
  }
}
