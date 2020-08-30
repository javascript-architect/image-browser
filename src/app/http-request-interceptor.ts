import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let modifiedReq = req.clone({});
    modifiedReq = modifiedReq.clone({
      setHeaders: {
        Authorization: `Client-ID ${environment.UNSPLASH_SECRET_KEY}`,
      },
    });

    return next.handle(modifiedReq);
  }
}
