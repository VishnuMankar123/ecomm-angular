import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from './modules/loginresponse.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomm-angular';

  constructor(private toastr: ToastrService,
    private store : Store<{authReducer: LoginResponse}>,
    private authService : AuthService){

      this.store.select('authReducer').subscribe({
        next: (loginData)=>{
          this.authService.saveLoginDataToLocalStorage(loginData)
        }
      });
    }

  shwtoastr(){
    this.toastr.error('Hello world!', 'Toastr fun!');
  }
}
