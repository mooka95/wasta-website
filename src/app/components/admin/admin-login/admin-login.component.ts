import { Router } from '@angular/router';
import { AdminService } from './../../../Services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  subscription:Subscription;
  loginForm:FormGroup
  error:string;

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required,Validators.minLength(4)]),
    

    })
    
  }
  onSubmit(){
   this.subscription= this.adminService.login(this.loginForm.value).subscribe(
     (response)=>{
       if(response['admin'].token){
        localStorage.setItem('token',response['admin'].token);
        this.router.navigateByUrl('admin/Home')


       }
       
     },
     (err)=>{
       console.log(err);
       if(err.statusText==='Unauthorized')
       this.error="Email or Password is InCorrect "
     }
   );
    this.loginForm.reset()

    
  }

}
