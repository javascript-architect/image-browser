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
  photos: Photos[];

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos() {
    this.photoService.getPhotos().subscribe((res: any) => {
      res.forEach((photo: any) => {
        this.photos.push({
          thumb: photo.urls.thumb,
          small: photo.urls.small,
          regular: photo.urls.regular,
          full: photo.urls.full,
        });
      });
    });
  }
}
