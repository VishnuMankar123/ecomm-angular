import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css']
})
export class CustomNavbarComponent {

   collapse=true;
  //this function is used to collapse the navbar
   toggle(){
    this.collapse = !this.collapse;
  }
}
