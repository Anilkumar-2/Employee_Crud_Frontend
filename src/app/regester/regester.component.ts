import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HeadService } from '../head.service';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent {
  regForm: FormGroup
  constructor(private http:HttpClient, private head: HeadService,private toastr:ToastrService) {
    this.regForm= new FormGroup(
      {
        firstname: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        lastname: new FormControl(null, [Validators.required, Validators.minLength(4)]),
        email:new FormControl(null, [Validators.required, Validators.email]),
        password:new FormControl(null, [Validators.required, Validators.minLength(8)]),
        confirmPassword:new FormControl(null, [Validators.required])
      },this.passwordMatch
    )
  }
  passwordMatch(rf:any) {
    let p = rf.controls['password'].value
    let cp = rf.controls['confirmPassword'].value
    if(p===cp)
    {
      return null
    }
    else{
      return {
        'passwordMatch':true
      }
    }
  
  }
  show(regForm:any) {
    this.showToastr()
    console.log(this.regForm.value);
    this.head.onPost(this.regForm.value).subscribe((result) => {
      console.warn(result);
    });
    return this.regForm.reset()
  }
  showToastr()
  {
    this.toastr.success("Registration Successfull!!")
  }
}
