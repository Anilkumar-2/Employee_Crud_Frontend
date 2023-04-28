import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HeadService } from '../head.service';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent {
  empform: FormGroup
  constructor(private head:HeadService, private activatedRoute:ActivatedRoute, private router:Router) {
    this.empform= new FormGroup(
      {
        name:new FormControl(null, [Validators.required]),
        dob:new FormControl(null, [Validators.required]),
        mobile:new FormControl(null, [Validators.required])
      }
    )
  }
  show(empform:any) {
    console.log(this.empform.value)
    this.addEmployee(empform)
    return this.empform.reset();
  }
  addEmployee(empform:any)
  {
    return this.head.onAddEmp(this.empform.value).subscribe((res)=>{
      console.log(res)
    })
  }
  remove()
  {
    localStorage.clear();
  }
  fun()
  {
    this.router.navigate(['/app']);
  }
}
