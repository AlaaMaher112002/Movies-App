import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-regsteration',
  templateUrl: './regsteration.component.html',
  styleUrls: ['./regsteration.component.scss']
})
export class RegsterationComponent implements OnInit {
loading:boolean=false;
apiError:string='';
constructor(private _AuthService:AuthService , private _Router:Router){}

formSubit(){
    this.loading=true;
    this._AuthService.SignUp(this.registerForm.value).subscribe({
      next:(data)=>
      {
        if(data.message=='success'){
         this._Router.navigateByUrl('/login');
         this.loading=false;
        }
      },
      error:(err)=>{
        this.loading=false;
        this.apiError=err.error.message
        alert(this.apiError)
      }
    })

  }

  registerForm:FormGroup=new FormGroup({
    'name':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(15)]),
    'email':new FormControl(null,[Validators.required,Validators.email]),
    'password':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z]{3,12}[0-9]{0,8}$/)]),
    'rePassword':new FormControl(null,[Validators.required,Validators.pattern(/^[a-z]{3,12}[0-9]{0,8}$/)]),
    'phone':new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)])


  })

  ngOnInit(): void {
  }



}
