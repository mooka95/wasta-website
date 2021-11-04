import { environment } from './../../../../environments/environment';
import { CustomModalComponent } from './../custom-modal/custom-modal.component';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiceImpl } from 'src/app/Model/service-impl';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() companyServices : ServiceImpl ;
  image:String;

  constructor( private router: Router,private sharedService:SharedService ,public modalService: NgbModal) { }

  ngOnInit(): void {
  this.image= `/${environment.API_URL+this.companyServices.imageUrl}`
  }
  navigateToDetailsPage(serviceCompany:ServiceImpl){
    this.sharedService.setService(serviceCompany);
    if(serviceCompany._id==='615ce3a00675d9de6c6d1f4e'){
      this.modalService.open(CustomModalComponent);
     
    }
    else{   
      this.router.navigate([`/service/${serviceCompany._id}`]);}




  }

}
