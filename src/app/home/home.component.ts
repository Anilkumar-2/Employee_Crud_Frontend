import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeadService } from '../head.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  EmplyeeData:any;
  constructor(private head:HeadService,private activatedRoute:ActivatedRoute, private router:Router,private toastr:ToastrService){}
// ngOnInit(){
//   return this.head.onGet()
//   .subscribe((result)=>{
//     this.EmplyeeData=result
//   })
// }
  getEmpployees()
  {
    // return this.head.onGet()
    // .subscribe((result)=>{
    //   this.EmplyeeData=result
    // })
    this.head.onGet().subscribe((res)=>{
      console.log(res);
      this.EmplyeeData = res;
    });
  }
  deleteEmployee(id:any){
    this.showToastr()
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
    this.head.isExpire=true;
    localStorage.clear();
  }
  fun()
  {    
    this.head.logoutToaster();
    this.router.navigate(['/login']);
  }
  showToastr()
  {
    this.toastr.success("Employee record deleted successfully!!")
    this.getEmpployees()
  }
  sureDelete()
  {
    this.toastr.warning("Are sure to Delete Employee??")
  }
}
