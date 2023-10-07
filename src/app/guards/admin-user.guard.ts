import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


export const adminUserGuard: CanActivateFn = (route, state) => {
  console.log("Admin User Guard");
  // logic 
 const authService=inject(AuthService);
 const router=inject(Router);
 const toaster=inject(ToastrService);
    
 return authService.checkAdminUserLogin().pipe(
  map((value) =>{
    if(value){
    //console.log("Admin User Guard if", value)
    return true;
    }
  else{
   // console.log("Admin User Guard else ", value)
    toaster.error('You are not logged in ')
    router.navigate(['/login']);
    return false;
  }
  }
 ));
};