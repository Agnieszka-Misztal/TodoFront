import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username, password){
    console.log('przed' +this.isUserLoggedIn())
    if(username==='user' && password === 'password'){
      sessionStorage.setItem('authenticatedUser', username)
      console.log('po' + this.isUserLoggedIn())
      return true;
    }
    return false;
    
  }

  executeAuthenticationService(username,password){

    
    let basicHeader = 'Basic ' + window.btoa(username + ':' + password)


    let headers = new HttpHeaders({
      Authorization: basicHeader
    })
    return this.http.get<AuthenticationBasic>(`http://localhost:8080/auth`, {headers})
    //jezeli response bedzie ok to mapujemy go, taki stream i map-lambda inaczej ;)
    .pipe(
      map( 
        response => {
        sessionStorage.setItem('authenticatedUser', username);
        return response;
      }
      )

    )
  }



  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)

  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }


}

export class AuthenticationBasic{
    constructor(public message:string){

    }
}
