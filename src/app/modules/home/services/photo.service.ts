import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

import { environment as env } from '../../../../environments/environment';
import { Photo } from '../components/home/home.component';

export interface ImageToZoom {
  photo: Photo;
  activeImage: string;
  activeIndex: number;
  action: 'zoom-in' | 'zoom-out';
}

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  #imageToZoom$ = new Subject<ImageToZoom>();

  constructor(private http: HttpClient) {}

  get imageToZoom$(): Observable<ImageToZoom> {
    return this.#imageToZoom$.asObservable();
  }

  setImageToZoom(imageToZoom: ImageToZoom): void {
    this.#imageToZoom$.next(imageToZoom);
  }

  getPhotos(): Observable<any> {
    return this.http.get(`${env.UNSPLASH_API}/photos`);
  }

  searchPhotos(query: string): Observable<any> {
    if (query) {
      return this.http.get(
        `${env.UNSPLASH_API}/search/photos?query=${encodeURIComponent(query)}`
      );
    }

    return this.getPhotos();
  }
}
