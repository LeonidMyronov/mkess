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
import {FsRightsComponent} from "./fire-safety-services/fs-rights/fs-rights.component";
import {FsCalculationComponent} from "./fire-safety-services/fs-calculation/fs-calculation.component";
import {FsArgumentsComponent} from "./fire-safety-services/fs-arguments/fs-arguments.component";
import {FsDocumentationComponent} from "./fire-safety-services/fs-documentation/fs-documentation.component";
import {FsServicesListComponent} from "./fire-safety-services/fs-services-list/fs-services-list.component";

const appRoutes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, children: [
      {path: '', component: ServicesListComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'who-we-are', component: WhoWeAreComponent},
      {path: 'how-we-work', component: HowWeWorkComponent},
    ]},
    { path: 'energetics', component: EnergyServicesComponent , children: [
      {path: '', component: EnergyServicesListComponent},
      {path: 'project', component: ProjectComponent},
      {path: 'smu', component: SmuComponent},
      {path: 'pnr', component: PnrComponent},
      {path: 'consult', component: ConsultComponent},
    ]},
    { path: 'fire-safety', component: FireSafetyServicesComponent, children: [
      {path: '', component: FsServicesListComponent},
      {path: 'fire-safety-rights-defense', component: FsRightsComponent},
      {path: 'fire-safety-arguments', component: FsArgumentsComponent},
      {path: 'fire-safety-calculation', component: FsCalculationComponent},
      {path: 'fire-safety-documentation-developing', component: FsDocumentationComponent},
    ]},
    { path: 'license', component: LicenseComponent},
    { path: 'contacts', component: ContactsComponent},
    { path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingComponent{

}