import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {RegisterRequest} from './register-request';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient,private _Router:Router) {
    if(localStorage.getItem('userToken') !==null){
      this.decodeUserData()
    }
   }

SignUp(registerData:RegisterRequest):Observable<any>{
 return this.http.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',registerData)
}

SignIn(loginData:RegisterRequest):Observable<any>{
  return this.http.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',loginData)
 }

userData=new BehaviorSubject(null)
decodeUserData(){
  let incodedToken=JSON.stringify(localStorage.getItem('userToken'));
  let decodedToken:any=jwtDecode(incodedToken);
  this.userData.next(decodedToken);
  console.log(this.userData);
}


signOut(){
  localStorage.removeItem('userToken');
  this.userData.next(null);
  this._Router.navigate(['/login'])
}







}
