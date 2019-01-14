import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HAuthenticationService } from '../service/h-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= ''
  password= ''
  errorMessage = 'nieprwidlowy login lub haslo'
  invalidLogin = false;


  constructor(private router: Router, private hAuthenticationService: HAuthenticationService ) { }

  ngOnInit() {
  }

  login(){
    if(this.hAuthenticationService.authenticate(this.username, this.password)){
      this.invalidLogin=false
      //po zalogowaniu przekierowanie na url home, username przkazany jako parametr
      this.router.navigate(['home', this.username])
    }else{
      this.invalidLogin=true
    }
  }

}
