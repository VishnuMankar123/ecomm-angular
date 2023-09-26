import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { LoginResponse } from '../modules/loginresponse.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  generateToken(loginData:{email:string, password:string}){
   return this.httpClient.post<LoginResponse>(`${environment.apiUrl}/auth/login`,loginData);
  }
}
