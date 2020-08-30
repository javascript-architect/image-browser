import { Component, OnInit } from '@angular/core';

import { PhotoService } from '../../services/photo.service';

export interface Photos {
  thumb: string;
  small: string;
  regular: string;
  full: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  photos: Photos[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  private transFormResponse(response: any = []) {
    this.photos.length = 0;
    response.forEach((photo: any) => {
      this.photos.push({
        thumb: photo.urls.thumb,
        small: photo.urls.small,
        regular: photo.urls.regular,
        full: photo.urls.full,
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
      this.transFormResponse(response?.results);
    });
  }
}
