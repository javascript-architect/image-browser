import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
} from '@angular/core';

import { PhotoService } from '../services/photo.service';
import { ImageToZoom } from '../models/ImageToZoom';

@Directive({
  selector: '[appZoomImage]',
})
export class ZoomImageDirective {
  @Input()
  imageToZoom: ImageToZoom;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private photoService: PhotoService
  ) {}

  @HostListener('click') onImageClick(): void {
    this.zoomImage(this.imageToZoom);
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(): void {
    this.photoService.setImageToZoom(null);
  }

  private zoomImage(imageToZoom: ImageToZoom): void {
    if (imageToZoom.action === 'zoom-in' && imageToZoom.activeIndex <= 2) {
      this.zoomInImage(imageToZoom);
    } else if (
      imageToZoom.action === 'zoom-out' &&
      imageToZoom.activeIndex >= 1
    ) {
      this.zoomOutImage(imageToZoom);
    }

    this.photoService.setImageToZoom(imageToZoom);
  }

  private zoomInImage(imageToZoom: ImageToZoom): void {
    imageToZoom.activeIndex += 1;
    switch (imageToZoom.activeIndex) {
      case 1:
        imageToZoom.activeImage = imageToZoom.photo.regular;
        break;
      case 2:
        imageToZoom.activeImage = imageToZoom.photo.full;
        imageToZoom.action = 'zoom-out';
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'zoom-out');
        break;
    }
  }

  private zoomOutImage(imageToZoom: ImageToZoom): void {
    imageToZoom.activeIndex -= 1;
    switch (imageToZoom.activeIndex) {
      case 0:
        imageToZoom.activeImage = imageToZoom.photo.small;
        imageToZoom.action = 'zoom-in';
        this.renderer.setStyle(this.el.nativeElement, 'cursor', 'zoom-in');
        break;
      case 1:
        imageToZoom.activeImage = imageToZoom.photo.regular;
        break;
    }
  }
}
