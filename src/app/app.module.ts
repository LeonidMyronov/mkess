import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ProjectComponent } from './services/project/project.component';
import { PnrComponent } from './services/pnr/pnr.component';
import { SmuComponent } from './services/smu/smu.component';
import { ConsultComponent } from './services/consult/consult.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LicenseComponent } from './license/license.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingComponent } from "./app-routing.module";
import { DbService } from "./core/db.service";
import { Tab1Component } from './home/tab1/tab1.component';
import { ServicesListComponent } from './home/services-list/services-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    ProjectComponent,
    PnrComponent,
    SmuComponent,
    ConsultComponent,
    ContactsComponent,
    LicenseComponent,
    HomeComponent,
    Tab1Component,
    ServicesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingComponent
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
