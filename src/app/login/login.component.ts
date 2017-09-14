import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BarService } from "app/_services/bar.service";


@Component({
  selector: 'login-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router,private bar : BarService) { 
    
  }

  ngOnInit() {
    this.bar.hide();
    
  }

  loginFunc(){
    console.log("login func");
    this.router.navigate(['/dashboard']);
  }



}
