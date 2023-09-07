import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tasksample';
  flag:boolean=true;
  change()
  {
    // debugger
 if(this.flag=true){
  this.flag=false;
 }
 else{
  this.flag=true;
 }

  }
}
