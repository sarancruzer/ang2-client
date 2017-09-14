import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from "@angular/router";
import { BarService } from "./_services/bar.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[BarService]
})
export class AppComponent implements OnInit {

  private locationURL : any;

  constructor(public location: Location,private  router : Router,private bar : BarService) {
    this.locationURL = this.router.url;
  }
  
  ngOnInit() {
    this.router.navigate(['/dashboard']);  
  }

    isMaps(path){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(path == titlee){
        return false;
      }
      else {
        return true;
      }
    }
}
