import { CompanyServicesService } from './../../../Services/company-services.service';
import { ServiceImpl } from 'src/app/Model/service-impl';
import { SharedService } from 'src/app/Services/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
 serviceDetail:ServiceImpl;
 image:string

  constructor(private sharedService:SharedService,private route: ActivatedRoute,private companyService:CompanyServicesService,public modalService: NgbModal) { }

  ngOnInit(): void {
  
    const id = this.route.snapshot.paramMap.get('id');
    this.sharedService.setServiceId(id);
    this.companyService.getServiceFromId(id).subscribe(
      res=>{
        this.serviceDetail=res["service"];
        this.image= `${environment.API_URL}/${res.imageUrl}`
      },
      (err)=>{
          console.log(err)
      }
    );
   


  }

  openModal(){
     this.modalService.open(FormModalComponent);
  }

}
