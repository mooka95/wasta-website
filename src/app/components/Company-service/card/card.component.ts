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

  constructor( private router: Router,private sharedService:SharedService ,public modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.companyServices);
  }
  navigateToDetailsPage(serviceCompany:ServiceImpl){
    this.sharedService.setService(serviceCompany);
    if(serviceCompany._id==='615c937eaec1401dc4124279'){
      this.modalService.open(CustomModalComponent);
     
    }
    else{   
      this.router.navigate([`/service/${serviceCompany._id}`]);}




  }

}
