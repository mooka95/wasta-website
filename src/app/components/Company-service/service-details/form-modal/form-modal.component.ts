import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/Services/shared.service';
import { ClientService } from './../../../../Services/client.service';
import { Client } from './../../../../Model/client';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  profileForm:FormGroup;
  client:Client;
  errorMessage:string;
  constructor(private clientService:ClientService,private route: ActivatedRoute,private sharedService:SharedService) { }
 

  ngOnInit(): void {
    this.profileForm=new FormGroup({
      'fullName':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phoneNumber':new FormControl('',[Validators.required])

    })
  }
  onSubmit(){
    console.log( this.profileForm.value) ;
    this.client=this.profileForm.value;
    this.client.subscribedService=this.sharedService.getService();
   this.subscription= this.clientService.saveClientSubscription(this.client).subscribe(
      (response)=>{
        console.log(response);
      },
      (err)=>{
        if(err.statusText==='Conflict'){
          this.errorMessage='You already subscribed to this service';
  
        }
       
       
      }
    )

    this.profileForm.reset();

  }
  ngOnDestroy(): void {
    
 this.subscription?.unsubscribe();
  }

}
