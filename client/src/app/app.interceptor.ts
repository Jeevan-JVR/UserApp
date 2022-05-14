import { Injectable } from '@angular/core';
import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { throwError, Observable, BehaviorSubject, of } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private AUTH_HEADER = 'Authorization';
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        headers: req.headers.set('Content-Type', 'application/json'),
      });
    }

    req = this.addAuthenticationToken(req);

    return next.handle(req);
  }

  private addAuthenticationToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = localStorage.getItem('token');
    if (!token) {
      return req;
    }

    return req.clone({
      headers: req.headers.set(this.AUTH_HEADER, 'Bearer ' + token),
    });
  }
}
