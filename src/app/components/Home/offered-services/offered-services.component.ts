import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceImpl } from './../../../Model/service-impl';
import { Component, OnInit } from '@angular/core';
import { CompanyServicesService } from 'src/app/Services/company-services.service';

@Component({
  selector: 'app-offered-services',
  templateUrl: './offered-services.component.html',
  styleUrls: ['./offered-services.component.scss']
})
export class OfferedServicesComponent implements OnInit {
   services:ServiceImpl[]=[];
  subscription:Subscription;

  constructor(private companyService:CompanyServicesService, private router:Router) { }

  ngOnInit(): void {
    this.subscription=this.companyService.getServices().subscribe(
      (response)=>{
       
        this.services=response["services"];

      },
      (err)=>{
        console.log(err);
      }
    )
  }
  navigateToService(service:ServiceImpl){
      this.router.navigateByUrl(`service/${service._id}`)

  }

}
