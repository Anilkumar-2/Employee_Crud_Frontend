import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { employee } from './EmployeeModel';


@Injectable({
  providedIn: 'root'
})
export class HeadService {
  public token: any = localStorage.getItem('jsontoken')
  abc: any
  headers = new HttpHeaders({

    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
  constructor(private http: HttpClient, private toastr: ToastrService) { }
  logoutToaster() {
    this.toastr.error("You got Logged out!!")
  }
  EmployeeData: any
  onPost(inputData: any) {
    return this.http.post('https://localhost:44386/api/account/signup', inputData)
  }
  onLogin(inputData: any) {
    this.abc = this.http.post('https://localhost:44386/api/account/logIn', inputData, { responseType: "text" });
    return this.abc
    // if(!this.abc.HttpResponse.headers.Bearer)
    // {
    //   return alert("Wrong");
    // }
  }
  isExpire: boolean = false
  onGet() {
    return this.http.get('https://localhost:44386/api/data/getallemployees', { headers: this.headers })
  }
  onGetById(id: any) {
    return this.http.get<employee>(`https://localhost:44386/api/data/GetEmployeeById?id=${id}`, { headers: this.headers });
  }
  onDelete(id: any) {
    return this.http.delete(`https://localhost:44386/api/data/DeleteEmployee?id=${id}`, { headers: this.headers })
  }
  onAddEmp(inputData: any) {
    console.log(inputData);
    return this.http.post('https://localhost:44386/api/data/AddEmployee', inputData, { headers: this.headers });
  }
  onUpdate(inputData: any) {
    console.log(inputData)
    return this.http.put('https://localhost:44386/api/data/UpdateEmployee', inputData, { headers: this.headers })
  }
}
