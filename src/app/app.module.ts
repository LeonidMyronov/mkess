import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EnergyServicesComponent } from './energy-services/energy-services.component';
import { ProjectComponent } from './energy-services/project/project.component';
import { PnrComponent } from './energy-services/pnr/pnr.component';
import { SmuComponent } from './energy-services/smu/smu.component';
import { ConsultComponent } from './energy-services/consult/consult.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LicenseComponent } from './license/license.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingComponent } from "./app-routing.module";
import { DbService } from "./core/db.service";
import { EnergyServicesListComponent } from './energy-services/energy-services-list/energy-services-list.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { WhoWeAreComponent } from './home/who-we-are/who-we-are.component';
import { HowWeWorkComponent } from './home/how-we-work/how-we-work.component';
import { ServicesListComponent } from './home/services-list/services-list.component';
import { FireSafetyServicesComponent } from './fire-safety-services/fire-safety-services.component';
import { FsServicesListComponent } from './fire-safety-services/fs-services-list/fs-services-list.component';
import { FsArgumentsComponent } from './fire-safety-services/fs-arguments/fs-arguments.component';
import { FsCalculationComponent } from './fire-safety-services/fs-calculation/fs-calculation.component';
import { FsDocumentationComponent } from './fire-safety-services/fs-documentation/fs-documentation.component';
import { FsRightsComponent } from './fire-safety-services/fs-rights/fs-rights.component';
import { DropDownDirective } from './directives/drop-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EnergyServicesComponent,
    ProjectComponent,
    PnrComponent,
    SmuComponent,
    ConsultComponent,
    ContactsComponent,
    LicenseComponent,
    HomeComponent,
    EnergyServicesListComponent,
    AboutUsComponent,
    WhoWeAreComponent,
    HowWeWorkComponent,
    ServicesListComponent,
    FireSafetyServicesComponent,
    FsServicesListComponent,
    FsArgumentsComponent,
    FsCalculationComponent,
    FsDocumentationComponent,
    FsRightsComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingComponent
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
