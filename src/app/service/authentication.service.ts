import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { API_URL } from '../app.constans';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }



  executeAuthenticationService(username,password){

    
    let basicHeader = 'Basic ' + window.btoa(username + ':' + password)


    let headers = new HttpHeaders({
      Authorization: basicHeader
    })
    return this.http.get<AuthenticationBasic>(`${API_URL}/auth`, {headers})
    //jezeli response bedzie ok to mapujemy go, taki stream i map-lambda inaczej ;)
    .pipe(
      map( 
        response => {
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('token', basicHeader);
        return response;
      }
      )

    )
  }


  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser')

  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
    return sessionStorage.getItem('token')
    }

  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)

  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }


}

export class AuthenticationBasic{
    constructor(public message:string){

    }
}
