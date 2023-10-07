import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginResponse } from '../modules/loginresponse.model';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Role } from '../modules/role.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private store:Store<{authReducer:LoginResponse}>) { }

  generateToken(loginData:{email:string, password:string}){
   return this.httpClient.post<LoginResponse>(`${environment.apiUrl}/auth/login`,loginData);
  }


  checkNormalUserLogin() {
    // check login and normal User
    // observable contains the login check status 
    return this.store.select('authReducer').pipe(
      map((value) => {
        // condition for checking login 

        const isNormalRole=value.user?.roles.find(role=>
          role.rolenName==environment.ROLE_NORMAL_NAME
          && role.roleId==environment.ROLE_NORMAL_ID)
       // console.log(isNormalRole)
        if( value.login && value.jwtToken !== '' && value.user && isNormalRole) return true;
        else return false;
      })
    );
  }

  // to store the login data to the localstorage 
  saveLoginDataToLocalStorage(loginData:LoginResponse) {
      localStorage.setItem('loginData', JSON.stringify(loginData));
      console.log("data saved to local storage ",loginData);
  }

  // get the data from the local storage
  static getLoginDataFromLocalStorage() {
    const dataString= localStorage.getItem('loginData');
    if(dataString){
     return JSON.parse(dataString);
    }else{
      return null;
    }
  }

  // this method is used for get logged user Data form store 
  getLoggedInData(){
    return this.store.select('authReducer');
  }

  checkAdminUserLogin() {
    // check login and normal User
    // observable contains the login check status 
    return this.store.select('authReducer').pipe(
      map((value) => {
        // condition for checking login 

        const isAdminRole=value.user?.roles.find(role=>role.rolenName==environment.ROLE_ADMIN_NAME)
       // console.log(isAdminRole)
        if( value.login && value.jwtToken !== '' && value.user && isAdminRole) return true;
        else return false;
      })
    );
  }
}