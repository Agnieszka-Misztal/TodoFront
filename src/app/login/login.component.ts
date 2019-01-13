import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= 'user'
  password= ''
  errorMessage = 'nieprwidlowy login lub haslo'
  invalidLogin = false;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.username==='user' && this.password === 'password'){
      this.invalidLogin=false
      //po zalogowaniu przekierowanie na url home, username przkazany jako parametr
      this.router.navigate(['home', this.username])
    }else{
      this.invalidLogin=true
    }
  }

}
