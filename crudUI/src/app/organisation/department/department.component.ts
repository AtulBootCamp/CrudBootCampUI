import { Component } from '@angular/core';
import { IDepartment } from '../interface/idepartment';
import { DepartmentService } from '../service/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent {
    
    department:IDepartment[]=[];

    constructor(public departmentService:DepartmentService){}

    ngOnInit():void{
      console.log("Inside ngOnInit()");      
      this.departmentService.getAll().subscribe((data:IDepartment | IDepartment[])=>{
        if(Array.isArray(data))
          this.department=data;
        else
          this.department=[data];        
          console.log(this.department);
      });
    }
}
