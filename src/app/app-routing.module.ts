import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {EnergyServicesComponent} from "./energy-services/energy-services.component";
import {LicenseComponent} from "./license/license.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {HomeComponent} from "./home/home.component";
import {EnergyServicesListComponent} from "./energy-services/energy-services-list/energy-services-list.component";
import {AboutUsComponent} from "./home/about-us/about-us.component";
import {WhoWeAreComponent} from "./home/who-we-are/who-we-are.component";
import {HowWeWorkComponent} from "./home/how-we-work/how-we-work.component";
import {ServicesListComponent} from "./home/services-list/services-list.component";
import {FireSafetyServicesComponent} from "./fire-safety-services/fire-safety-services.component";
import {ProjectComponent} from "./energy-services/project/project.component";
import {ConsultComponent} from "./energy-services/consult/consult.component";
import {PnrComponent} from "./energy-services/pnr/pnr.component";
import {SmuComponent} from "./energy-services/smu/smu.component";

const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: [
      {path: '', component: ServicesListComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'who-we-are', component: WhoWeAreComponent},
      {path: 'how-we-work', component: HowWeWorkComponent},
    ] },
    { path: 'energetics', component: EnergyServicesComponent , children: [
      {path: '', component: EnergyServicesListComponent},
      {path: 'project', component: ProjectComponent},
      {path: 'smu', component: SmuComponent},
      {path: 'pnr', component: PnrComponent},
      {path: 'consult', component: ConsultComponent},
    ]},
    { path: 'fire-safety', component: FireSafetyServicesComponent },
    { path: 'license', component: LicenseComponent},
    { path: 'contacts', component: ContactsComponent},
    { path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingComponent{

}