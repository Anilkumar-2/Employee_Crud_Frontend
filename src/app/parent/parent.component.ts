import { AfterContentInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnChanges,OnInit,DoCheck,AfterContentInit{
  isChild=true
  title=""
constructor(){
  console.log("Parent constructor")
}
ngOnInit(): void {
  console.log("Parent OnInit")
}
ngOnChanges()
{
  console.log("onchanges parent")
}
ngDoCheck()
{
  console.log("DoCheck parent")
}
ngAfterContentInit(): void {
  console.log("ngcontent parent")
}
toggleChild()
{
  this.isChild=!this.isChild;
}
}
