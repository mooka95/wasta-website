import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit ,OnDestroy{

  constructor(private adminService:AdminService,private router:Router) { }
  ngOnDestroy(): void {
    let sure=confirm("Proceed in Logout ?");
    if(sure){
      this.adminService.logout();
      this.router.navigateByUrl('admin/login')
    }
  }

  ngOnInit(): void {
  }

}
