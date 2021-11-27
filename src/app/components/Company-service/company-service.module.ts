import { AdminModule } from './../admin/admin.module';
import { AppModule } from './../../app.module';
import { CompanyServiceComponent } from './company-service/company-service.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { FormModalComponent } from './service-details/form-modal/form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';


const routes:Routes = [
  {path:'',component:CompanyServiceComponent},
  {path:':id',component:ServiceDetailsComponent},

]

@NgModule({
  declarations: [
    CompanyServiceComponent,
    CardComponent,
    ServiceDetailsComponent,
    FormModalComponent,
    SpinnerComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  exports: [SpinnerComponent]
})
export class CompanyServiceModule { }
