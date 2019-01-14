import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HAuthenticationService {

  constructor() { }

  authenticate(username, password){
    console.log('przed' +this.isUserLoggedIn())
    if(username==='user' && password === 'password'){
      sessionStorage.setItem('authenticatedUser', username)
      console.log('po' + this.isUserLoggedIn())
      return true;
    }
    return false;
    
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser')
    return !(user===null)

  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
  }
}
