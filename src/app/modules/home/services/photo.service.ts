import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment as env } from '../../../../environments/environment';
import { Photo } from '../components/home/home.component';

export interface ImageToZoom {
  photo: Photo,
  activeImage: string;
  activeIndex: number,
  action: 'zoom-in' | 'zoom-out'
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private _imageToZoom$ = new Subject<ImageToZoom>();

  constructor(private http: HttpClient) {}

  get imageToZoom$() {
    return this._imageToZoom$.asObservable();
  }

  activateImage(imageToZoom: ImageToZoom) {
    this._imageToZoom$.next(imageToZoom);
  }

  getPhotos() {
    return this.http.get(`${env.UNSPLASH_API}/photos`);
  }

  searchPhotos(query: string) {
    if (query) {
      return this.http.get(
        `${env.UNSPLASH_API}/search/photos?query=${encodeURIComponent(query)}`
      );
    }

    return this.getPhotos();
  }
}
