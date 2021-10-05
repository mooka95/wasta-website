import { CompanyServicesService } from './../../../Services/company-services.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceImpl } from 'src/app/Model/service-impl';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-service',
  templateUrl: './company-service.component.html',
  styleUrls: ['./company-service.component.scss']
})
export class CompanyServiceComponent implements OnInit ,OnDestroy{
  public Services:any;
  private subscription:Subscription;

  constructor(private companyService:CompanyServicesService) { 
   
  }


  ngOnInit(): void {
  this.subscription=  this.companyService.getServices().subscribe(

    (response)=>{
   
     this.Services=response['services'];
    
    },
    (err)=>{
      console.log(err);

    }

  );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

}
