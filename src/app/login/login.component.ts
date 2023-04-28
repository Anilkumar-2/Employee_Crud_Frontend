import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HeadService } from '../head.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  regForm: FormGroup
  public result2: any;
  constructor(private head: HeadService, private router: Router, private route: ActivatedRoute) {
    this.regForm = new FormGroup(
      {
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required, Validators.minLength(8)])
      }
    )
  }
  // count:number=1
  show(regForm: any) {
    console.log(this.regForm.value)
    this.head.onLogin(this.regForm.value).subscribe((result: any) => {
      console.warn(result);
      localStorage.setItem('jsontoken', result);
      if (result) {
        this.router.navigate(['/home']);
      }
    });
  }
  call()
  {
    alert("Wrong")
  }
}

