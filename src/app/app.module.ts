import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SystemAdminComponent } from './components/system-admin/system-admin.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { PanelModule } from 'primeng/panel';
import { StepperModule } from 'primeng/stepper';
import { FepEnrollmentReportsComponent } from './components/reports/fep-enrollment-reports/fep-enrollment-reports.component';
import { RadioButton } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SystemAdminComponent,
    ReportsComponent,
    FepEnrollmentReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    PanelModule,
    StepperModule,
    RadioButton,
    SelectModule,
    DividerModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none'
        }
      }
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  bootstrap: [AppComponent]
})
export class AppModule { }
