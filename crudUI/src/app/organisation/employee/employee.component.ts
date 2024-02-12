import { Component } from '@angular/core';
import { IEmployee } from '../interface/iemployee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
    
  employee:IEmployee[]=[];

  constructor(public employeeService:EmployeeService){}

  ngOnInit():void{
    console.log("Inside ngOnInit()");
    this.employeeService.getAll().subscribe((data:IEmployee | IEmployee[])=>{
      if(Array.isArray(data))
        this.employee=data;
      else
        this.employee=[data];
      
      console.log(this.employee);
    });
  }

}
