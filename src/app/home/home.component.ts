import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name=''
  welcomeMessageFromService:string

  constructor(private route:ActivatedRoute, private service:WelcomeDataService) { }

  ngOnInit() {
    //pobranie parametru z linku
   this.name= this.route.snapshot.params['name']
  }

  getWelcomeMessage(){

    
    this.service.helloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)

    );
  
  }

  
  getWelcomeMessageWithParam(){

    
    this.service.executeHelloWorldParam(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)

    );
  
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService= response.message;
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService = error.error.message
  }


}
