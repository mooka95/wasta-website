import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactUSComponent } from './components/ContactUs/contact-us/contact-us.component';
import { HomeComponent } from './components/Home/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'about',loadChildren:()=>import('./components/About/about/about.module').then(m=>m.AboutModule)},
  {path:'services',loadChildren:()=>import('./components/Company-service/company-service.module').then(m=>m.CompanyServiceModule)},
  {path:'home',loadChildren:()=>import('./components/Home/home.module').then(m=>m.HomeModule)},
  {path:'contact-us',loadChildren:()=>import('./components/ContactUs/contact-us.module').then(m=>m.ContactUsModule)},
  {path:'not-found',component:NotFoundComponent},
  {path:'admin',loadChildren:()=>import('./components/admin/admin.module').then(m=>m.AdminModule)},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
