import { CompanyServicesService } from './../../../Services/company-services.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  addServiceForm:FormGroup;
  message:string
  constructor(private companyService:CompanyServicesService) { }
  

  ngOnInit(): void {
    this.addServiceForm=new FormGroup({
      'title':new FormControl('',[Validators.required]),
      'description':new FormControl('',[Validators.required]),
      'price': new FormControl('',[Validators.required,Validators.min(0)]),
      'imageUrl':new FormControl('',[Validators.required])

    })
  }
  onSubmit(){
    this.subscription=this.companyService.addService(this.addServiceForm.value).subscribe(
      (response)=>{
     this.message=response['message'];

      },(err)=>{
        console.log(err)
      }

      
    )
    this.addServiceForm.reset();
  
  }

  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}

