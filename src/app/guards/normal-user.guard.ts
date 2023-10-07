import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const normalUserGuard: CanActivateFn = (route, state) => {
  console.log("Normal User Guard");
  // logic 
 const authService=inject(AuthService);
 const router=inject(Router);
 const toaster=inject(ToastrService);
 return authService.checkNormalUserLogin().pipe(
  map((value) =>{
    if(value){
    //console.log("Normal User Guard if", value)
    return true;
    }
  else{
   // console.log("Normal User Guard else ", value)
    toaster.error('You are not logged in ')
    router.navigate(['/login']);
    return false;
  }
  }
 ));
};