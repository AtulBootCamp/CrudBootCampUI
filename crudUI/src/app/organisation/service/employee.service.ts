import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from '../interface/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiURL='http://localhost:8080/api/employee/';
  
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<IEmployee>{
      return this.httpClient.get<IEmployee>(this.apiURL+'all');     
  }

  create(employee:IEmployee):Observable<IEmployee>{
    return this.httpClient.post<IEmployee>(this.apiURL+'create',JSON.stringify(employee));
  }

  getById(id:number):Observable<IEmployee>{
    return this.httpClient.get<IEmployee>(this.apiURL+'id');
  }

  update(id:number, employee:IEmployee):Observable<IEmployee>{
    return this.httpClient.put<IEmployee>(this.apiURL+'id',JSON.stringify(employee));
  }

  delete(id:number):Observable<Object>{
    return this.httpClient.delete<Object>(this.apiURL+'id');
  }

}
