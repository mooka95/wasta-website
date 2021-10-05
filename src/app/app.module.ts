import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home/home.component';
import { AboutComponent } from './components/About/about/about.component';
import { NavBarComponent } from './components/NavBar/nav-bar/nav-bar.component';

import { ContactUSComponent } from './components/ContactUs/contact-us/contact-us.component';
import { ContactFormComponent } from './components/ContactUs/contact-form/contact-form.component';
import { CardComponent } from './components/Company-service/card/card.component';
import { CompanyServiceComponent } from './components/Company-service/company-service/company-service.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ServiceDetailsComponent } from './components/Company-service/service-details/service-details.component';
import { NgbModule,NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './components/Company-service/service-details/form-modal/form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

import { OfferedServicesComponent } from './components/Home/offered-services/offered-services.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AdminComponent } from './components/admin/admin.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { SideBarComponent } from './components/admin/side-bar/side-bar.component';
import { SubscriptionsComponent } from './components/admin/subscriptions/subscriptions.component';
import { AddAdminComponent } from './components/admin/add-admin/add-admin.component';
import { AddServiceComponent } from './components/admin/add-service/add-service.component';
import { MessageComponent } from './components/admin/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    ContactUSComponent,
    ContactFormComponent,
    CardComponent,
    CompanyServiceComponent,
    NotFoundComponent,
    ServiceDetailsComponent,
    FormModalComponent,
    OfferedServicesComponent,
    AdminComponent,
    AdminLoginComponent,
    SideBarComponent,
    SubscriptionsComponent,
    AddAdminComponent,
    AddServiceComponent,
    MessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule ,
    IvyCarouselModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
