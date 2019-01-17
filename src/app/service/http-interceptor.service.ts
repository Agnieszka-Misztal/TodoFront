import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  // dodanie headera z autoryzacjia i przekazanie requesta dalej
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username= 'user'
    let password = 'password'
    let basicHeader = 'Basic ' + window.btoa(username + ':' + password)

    request = request.clone({
      setHeaders : {
        Authorization : basicHeader
      }
    })

    return next.handle(request)
  }
}
