import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  constructor(private router: Router){}

  navigateToUsers(){
    if(localStorage.getItem("role")==="ROLE_USER"){
      
      return;
    }else if (localStorage.getItem("role")==="ROLE_ADMIN"){
      this.router.navigate(['home/manageUsers']);
    }
  }

  navigateToApplications(){
    this.router.navigate(['home/manageApplication']);

  }

  navigateToStructure(){
    this.router.navigate(['home/manageStructure']);

  }

  navigateToFacture(){
    this.router.navigate(['home/manageFacture']);

  }

  navigateToConventions(){
    this.router.navigate(['home/manageConvention']);

  }
}
