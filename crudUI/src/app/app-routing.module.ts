import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './organisation/department/department.component';
import { EmployeeComponent } from './organisation/employee/employee.component';

const routes: Routes = [
  {path:'',redirectTo:'department',pathMatch:'full'},
  {
    title:'Department',
    path:'department',
    component:DepartmentComponent
  },
  {
    title:'Employee',
    path:'employee',
    component:EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
