import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    let sure=confirm("Proceed in Logout ?");
    if(sure){
      this.adminService.logout();
      this.router.navigateByUrl('admin/login')
    }


  }

}
