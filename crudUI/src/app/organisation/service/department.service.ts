import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IDepartment } from '../interface/idepartment';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private path='http://localhost:8080/api/department/';
  
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IDepartment>{       
    return this.httpClient.get<IDepartment>(this.path+'all');    
  }

  create(department:IDepartment):Observable<IDepartment>{
    return this.httpClient.post<IDepartment>(this.path+'create',JSON.stringify(department));
  }

  getById(id:number):Observable<IDepartment>{
    return this.httpClient.get<IDepartment>(this.path+'id');
  }

  update(id:number, department:IDepartment):Observable<IDepartment>{
    return this.httpClient.put<IDepartment>(this.path+'id',JSON.stringify(department));
  }

  delete(id:number):Observable<IDepartment>{
    return this.httpClient.delete<IDepartment>(this.path+'id');
  }

}
