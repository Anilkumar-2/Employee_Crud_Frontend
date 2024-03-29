import { Component } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { HeadService } from '../head.service';
import { employee } from '../EmployeeModel';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  data: any;
  public dataId!: number;
  employee!: any
  // regForm: FormGroup
  constructor(private head:HeadService, private activatedroute: ActivatedRoute, private router: Router, private toastr:ToastrService)
  {
  }
  abc=this.head.EmployeeData
  updateEmp() { 
    this.showToaster();
    this.head.onUpdate(this.abc).subscribe((res) => { 
      console.log(res)
    }) 
  }
  remove()
  {
    localStorage.clear();
  }
  fun()
  {
    this.head.logoutToaster();
    this.router.navigate(['/login']);
  }
  showToaster()
  {
    this.toastr.success("Emplyee Details Updated!!")
  }
}
