import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SystemAdminComponent } from './components/system-admin/system-admin.component';
import { ReportsComponent } from './components/reports/reports.component';
import { FepEnrollmentReportsComponent } from './components/reports/fep-enrollment-reports/fep-enrollment-reports.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'system-admin', component: SystemAdminComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'fep-enrollment-reports', component: FepEnrollmentReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
