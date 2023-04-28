import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeadService } from '../head.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  EmplyeeData:any;
  constructor(private head:HeadService,private activatedRoute:ActivatedRoute, private router:Router){}

  getEmpployees()
  {
    return this.head.onGet()
    .subscribe((result)=>{
      this.EmplyeeData=result
    })
  }
  deleteEmployee(id:any){
    return this.head.onDelete(id)
    .subscribe((res)=>{
      console.log(res)
    })
  }
  send(emp:any)
  {
    this.head.EmployeeData=emp
  }
  remove()
  {
    localStorage.clear();
  }
  fun()
  {
    this.router.navigate(['/app'], { relativeTo: this.activatedRoute });
  }
}
