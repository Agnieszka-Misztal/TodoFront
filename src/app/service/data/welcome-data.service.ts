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

   
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/param/${name}`)
  }


}
