import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  helloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }
    
  executeHelloWorldParam(name){

    let basicHeader = this.createHeader()
    let headers = new HttpHeaders({
      Authorization: basicHeader
    })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/param/${name}`, {headers})
  }

  createHeader(){
    let username= 'user'
    let password = 'password'
    let basicHeader = 'Basic ' + window.btoa(username + ':' + password)
    return basicHeader;
  }
}
