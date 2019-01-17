import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor(private authenticationService : AuthenticationService) { }

  // dodanie headera z autoryzacjia i przekazanie requesta dalej
  intercept(request: HttpRequest<any>, next: HttpHandler){

   let basicHeader = this.authenticationService.getAuthenticatedToken();
   let username = this.authenticationService.getAuthenticatedUser();

if(basicHeader && username){  // jezeli jest to dodaj header z autoryzacja

    request = request.clone({
      setHeaders : {
        Authorization : basicHeader
      }
    })
  }
    return next.handle(request)
  }
}
