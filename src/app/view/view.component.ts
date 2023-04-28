import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { employee } from '../EmployeeModel';
import { HeadService } from '../head.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(private head: HeadService, private activatedRoute: ActivatedRoute, private router:Router) { }
  Employee: any;

  ngOnInit() {
    return this.head.onGetById(this.head.EmployeeData.id).subscribe((result) => {
      console.log(result)
      this.Employee = result
    }
    )
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
