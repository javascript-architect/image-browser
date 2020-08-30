import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}
  getPhotos() {
    return this.http.get(`${env.UNSPLASH_API}`);
  }

  searchPhotos(query: string) {
    return this.http.get(
      `${env.UNSPLASH_API}/search/photos?query=${encodeURIComponent(query)}`
    );
  }
}