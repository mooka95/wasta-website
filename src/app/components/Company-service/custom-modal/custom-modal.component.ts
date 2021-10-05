import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit,OnDestroy {

  subscription:Subscription;
  profileForm:FormGroup;
  client:Client;
  errorMessage:string;
  constructor(private clientService:ClientService,private route: ActivatedRoute,private sharedService:SharedService) { }
 

  ngOnInit(): void {
    this.profileForm=new FormGroup({
      'fullName':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'phoneNumber':new FormControl('',[Validators.required]),
      'description':new FormControl('',[Validators.required]),
      'price':new FormControl('',Validators.required)

    })
  }
  onSubmit(){
     let subscribedService =this.sharedService.getService();
     subscribedService.description=this.profileForm.value.description;
     subscribedService.price=this.profileForm.value.price;
   this.profileForm.value.subscribedService=subscribedService;
    this.client=this.profileForm.value;
    this.clientService.saveClientSubscription(this.client).subscribe(
      response=>{
       console.log(response)
      },
    (err)=>{
      console.log(err)
    }
    )

    this.profileForm.reset();

  }
  ngOnDestroy(): void {
    
 this.subscription?.unsubscribe();
  }


}
