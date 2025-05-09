import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SystemAdminComponent } from './components/system-admin/system-admin.component';
import { ReportsComponent } from './components/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SystemAdminComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
