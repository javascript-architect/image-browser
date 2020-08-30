import { Component, OnInit } from '@angular/core';

import { PhotoService, ImageToZoom } from '../../services/photo.service';

export interface Photo {
  id: string;
  thumb: string;
  small: string;
  regular: string;
  full: string;
  like: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photos: Photo[] = [];
  imageToZoom: ImageToZoom;

  constructor(private photoService: PhotoService) {
    photoService.imageToZoom$.subscribe((value: ImageToZoom) => {
      this.imageToZoom = value;
    });
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  private transFormResponse(response: any = []): void {
    this.photos.length = 0;
    response.forEach((photo: any) => {
      this.photos.push({
        id: photo.id,
        thumb: photo.urls.thumb,
        small: photo.urls.small,
        regular: photo.urls.regular,
        full: photo.urls.full,
        like: false,
      });
    });
  }

  getPhotos(): void {
    this.photoService.getPhotos().subscribe((response: any) => {
      this.transFormResponse(response);
    });
  }

  onSearch(query: string): void {
    this.photoService.searchPhotos(query).subscribe((response: any) => {
      this.transFormResponse(response?.results || response);
    });
  }

  toggleLike(modifiedPhoto: Photo): void {
    this.photos = this.photos.map((photo: Photo) => {
      if (photo.id === modifiedPhoto.id) {
        return modifiedPhoto;
      }

      return photo;
    });
  }

  trackById(photo: Photo): string | boolean {
    return photo?.id;
  }

  activateImage(photo: Photo): void {
    this.photoService.setImageToZoom({
      photo,
      activeImage: photo.small,
      activeIndex: 0,
      action: 'zoom-in',
    });
  }

  closeZoomedImageContainer(): void {
    this.photoService.setImageToZoom(null);
  }
}
