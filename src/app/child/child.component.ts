import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  counter = 0
  stop: any
  @ContentChild('greet') greet: any
  @Input() title: any
  ngOnInit(): void {
    console.log("Child OnInit")
    // this.stop=setInterval(()=>{
    //   this.counter=this.counter+1
    //   console.log(this.counter)
    // },1000);
  }
  constructor() {
    console.log("Child constructor" + this.greet)
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log("onchanges child" + this.greet)
  }
  ngDoCheck() {
    console.log("DoCheck child" + this.greet)
  }
  ngAfterContentInit(): void {
    console.log("Aftercontentinit" + this.greet)
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("AfterViewInit child")
  }
  ngAfterViewChecked(): void {
    console.log("AfterViewChecked child")
  }
  ngOnDestroy() {
    // clearInterval(this.stop)
    console.log("Child OnDestroy" + this.greet)
  }
}
