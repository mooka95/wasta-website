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
  constructor(private companyService:CompanyServicesService) { }
  

  ngOnInit(): void {
    this.addServiceForm=new FormGroup({
      'title':new FormControl('',[Validators.required]),
      'description':new FormControl('',[Validators.required]),
      'price': new FormControl(0,[Validators.required,Validators.min(0)]),
      'imageUrl':new FormControl('',[Validators.required])

    })
  }
  onSubmit(){
    this.subscription=this.companyService.addService(this.addServiceForm.value).subscribe(
      (response)=>{
        console.log(response)

      },(err)=>{
        console.log(err)
      }

      
    )
  
  }

  ngOnDestroy(): void {
    if(this.subscription)
    this.subscription.unsubscribe();
  }
}

