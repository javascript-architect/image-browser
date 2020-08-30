import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../../services/photo.service';

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

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  private transFormResponse(response: any = []) {
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

  getPhotos() {
    this.photoService.getPhotos().subscribe((response: any) => {
      this.transFormResponse(response);
    });
  }

  onSearch(query: string) {
    this.photoService.searchPhotos(query).subscribe((response: any) => {
      this.transFormResponse(response?.results || response);
    });
  }

  toggleLike(modifiedPhoto: Photo) {
    this.photos = this.photos.map((photo: Photo) => {
      if (photo.id === modifiedPhoto.id) {
        return modifiedPhoto;
      }

      return photo;
    });
  }

  trackById(photo: Photo) {
    return photo?.id;
  }
}
