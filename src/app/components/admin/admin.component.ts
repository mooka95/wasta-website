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

      this.router.navigateByUrl('admin/login')
  
  }

  ngOnInit(): void {
  }
  canExit() : boolean {
 
    if (confirm("Do you want to logout")) {
        return true
      } else {
        return false
      }
    }

}
