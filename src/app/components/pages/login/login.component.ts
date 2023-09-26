import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LoginResponse } from 'src/app/modules/loginresponse.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  //this object is used to send login data 
  loginData={
    email:'',
    password:'',
  };

  constructor(private toaster:ToastrService,private auth:AuthService){}

  formSubmitted(event: SubmitEvent){
      event.preventDefault();
      console.log(this.loginData);
      //valiate 
      if(this.loginData.email.trim()===''|| this.loginData.password.trim()===''){
          this.toaster.error('Value Required !!');
          return;
      }else{
        // login api 
          this.auth.generateToken(this.loginData).subscribe({
            next:(loginResponse:LoginResponse)=>{
              //success code
              this.toaster.success('User SuccessFully Login !!','');
              console.log('User Successfully Login',loginResponse);
              
            },
            error:(error: any)=>{
              //error code 
              console.log(error);
              this.toaster.error(error.error.message,'');
            
            },
            complete:()=>{
              //complete code it will be executed if success or error both conditions
            
            }
          })
      }
  }
}
