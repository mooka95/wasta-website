import { AdminService } from './../../../Services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit,OnDestroy {
  subscription:Subscription
  adminForm:FormGroup;
  errorMessage:string ;

  constructor(private adminService:AdminService) { }
  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.  adminForm=new FormGroup({
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',[Validators.required,Validators.minLength(5)])

    })
  }
  onSubmit(){
  this.subscription=this.adminService.addAdmin(this.adminForm.value).subscribe(
      (response)=>{
          console.log(response)
      },
      (err)=>{
        
        console.log(err.error.message)
        this.errorMessage=err.error.message;
      }
    );
    this.adminForm.reset();

  }

}
