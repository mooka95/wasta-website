import { AddServiceComponent } from './components/admin/add-service/add-service.component';
import { AddAdminComponent } from './components/admin/add-admin/add-admin.component';
import { MessageComponent } from './components/admin/message/message.component';


import { ServiceDetailsComponent } from './components/Company-service/service-details/service-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompanyServiceComponent } from './components/Company-service/company-service/company-service.component';
import { ContactUSComponent } from './components/ContactUs/contact-us/contact-us.component';
import { HomeComponent } from './components/Home/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/About/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { SubscriptionsComponent } from './components/admin/subscriptions/subscriptions.component';
import { AdminGuard } from './Services/admin.guard';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'service',component:CompanyServiceComponent},
  {path:'home',component:HomeComponent},
  {path:'contact-us',component:ContactUSComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'service/:id',component:ServiceDetailsComponent},
  {path:'admin',component:AdminComponent,canActivate:[AdminGuard],children:[
  
    {path:'subscription',component:SubscriptionsComponent},
    {path:'message',component:MessageComponent},
    {path:'add-admin',component:AddAdminComponent},
    {path:'add-service',component:AddServiceComponent},
    {path:'',redirectTo:"subscription",pathMatch:'full'},

  ]},
  {path:'admin/login',component:AdminLoginComponent},

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
