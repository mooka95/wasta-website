import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/NavBar/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { OfferedServicesComponent } from './components/Home/offered-services/offered-services.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CustomModalComponent } from './components/Company-service/custom-modal/custom-modal.component';
import { CompanyServiceModule } from './components/Company-service/company-service.module';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    OfferedServicesComponent,
    CustomModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule ,
    IvyCarouselModule,
    CompanyServiceModule
    

  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
