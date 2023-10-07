import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginResponse } from 'src/app/modules/loginresponse.model';
import { AuthService } from 'src/app/services/auth.service';
import { removeLoginData } from 'src/app/store/auth/auth.actions';

@Component({
  selector: 'app-custom-navbar',
  templateUrl: './custom-navbar.component.html',
  styleUrls: ['./custom-navbar.component.css'],
})
export class CustomNavbarComponent {
  collapse = true;
  loginData?: LoginResponse;
  constructor(private authService: AuthService, private store:Store<{authReducer:LoginResponse}>,private router:Router) {
    // this is for dynamically loading login and signup and logout userName button on navbar
    console.log(this.loginData);
    authService.getLoggedInData().subscribe({
      next: (loginResponse: LoginResponse) => (this.loginData = loginResponse),
    });
  }
  //this function is used to collapse the navbar
  toggle() {
    this.collapse = !this.collapse;
  }

  // this is used for logout functionality
  logout(){
    this.store.dispatch(removeLoginData())
    this.router.navigate(['/login']);

  }
}
