import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/modules/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent {

  //with the help of these object we are getting the from data 
  user=new User('','','','','',[],'');

  // this variable for spinner loading
  loading=false;

  constructor(private toaster : ToastrService,private userService:UserService ){}
 

  fromSubmit(event: SubmitEvent,signupFrom:NgForm) {
    event.preventDefault();
    console.log(event)
    if(signupFrom.valid){
      this.loading=true;
        this.userService.signupUser(this.user).
        subscribe({
          next:(user)=>{
            //success code
            this.toaster.success('User SuccessFully Registered !!','');
            console.log('User object is created ', user);
            signupFrom.resetForm();
          },
          error:(error)=>{
            //error code
            this.toaster.error('Error in creating user !!','');
            this.toaster.error('This email might exist,try with another one !!','');
            this.loading=false;
            console.log(error);
          
          },
          complete:()=>{
            //complete code it will be executed if success or error both conditions
            this.loading=false;
            console.log("completed");
          }
        })
    }else{
        this.toaster.error('Form is not valid !!','',{
          positionClass:'toast-top-right'
        });
    }

}

resetForm(signupFrom:NgForm){
  //this is used to reset the form
  this.user = new User('', '', '', '', '',[],'');
  signupFrom.resetForm();
}
}