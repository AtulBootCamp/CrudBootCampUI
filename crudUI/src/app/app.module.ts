import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { DepartmentComponent } from './organisation/department/department.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeComponent } from './organisation/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganisationComponent,
    DepartmentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
