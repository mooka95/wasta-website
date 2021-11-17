import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'', component:ContactUSComponent}
]

@NgModule({
  declarations: [
    ContactUSComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ContactUsModule { }
