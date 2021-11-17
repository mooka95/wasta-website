import { AdminComponent } from './admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminGuard } from 'src/app/Services/admin.guard';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { MessageComponent } from './message/message.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CanExitGuard } from 'src/app/Services/can-exit.guard';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
 {path:'login',component:AdminLoginComponent},
 {path:'Home',component:AdminComponent,canActivate:[AdminGuard],canDeactivate:[CanExitGuard],children:[
 {path:'AddAdmin',component:AddAdminComponent},
 {path:'AddService',component:AddServiceComponent},
 {path:'subscription',component: SubscriptionsComponent},
 {path:'message',component:MessageComponent},
 {path:'',redirectTo:'subscription',pathMatch:'full'}
 ]},
 {path:'',redirectTo:'login',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    SubscriptionsComponent,
    MessageComponent,
    AddServiceComponent,
    AddAdminComponent,
    AdminLoginComponent
  ],
  imports: [  
  CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
   
  ]

})
export class AdminModule { }
