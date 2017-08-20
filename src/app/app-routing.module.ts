import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {ServicesComponent} from "./services/services.component";
import {LicenseComponent} from "./license/license.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
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