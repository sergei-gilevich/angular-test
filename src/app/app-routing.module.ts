import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { GuitaristsComponent } from './guitarists/guitarists.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuitaristDetailsComponent } from './guitarist-details/guitarist-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'guitarists', component: GuitaristsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'details/:id', component: GuitaristDetailsComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
