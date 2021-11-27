import { CompanyServicesService } from './../../../Services/company-services.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceImpl } from 'src/app/Model/service-impl';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-service',
  templateUrl: './company-service.component.html',
  styleUrls: ['./company-service.component.scss']
})
export class CompanyServiceComponent implements OnInit ,OnDestroy{
  customServiceForm:FormGroup;
  public Services:any;
  private subscription:Subscription;
  isLoading:boolean=true;

  constructor(private companyService:CompanyServicesService) { 
   
  }


  ngOnInit(): void {

    this.customServiceForm=new FormGroup({
      'serviceName':new FormControl('',Validators.required),
      
      'price':new FormControl('',[Validators.required])

    })


  this.subscription=  this.companyService.getServices().subscribe(

    (response)=>{
     this.isLoading=false;
     this.Services=response['services'];
    
    
    },
    (err)=>{
      this.isLoading=false;
    }

  );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    
  }
  onSubmit(){

  }

}
