import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

    loginForm:FormGroup=new FormGroup({
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z]{3,12}[0-9]{0,8}$/)]),
  })

  constructor(private _AuthService:AuthService,private _Router:Router,private spinner: NgxSpinnerService,private toastr: ToastrService){}

  formSubmit(){
    this.spinner.show()
    if(this.loginForm.invalid){
      return;
    }
    this._AuthService.SignIn(this.loginForm.value).subscribe((data)=>
    {
      console.log(data);

      if(data.message=='success'){
        this.toastr.success('Hello!', 'Login Successfully!');
        localStorage.setItem('userToken',data.token);
        this._AuthService.decodeUserData()
       this._Router.navigateByUrl('/home');
      }else{
        this.toastr.error(data.message, 'Login Error!');
      }
      this.spinner.hide();
    })

  }



ngOnInit(): void {

}




}
