import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [
    {'id':1,'name':'CSE','description':'CSE is the course offered by the Osmania University for Bachelor of Engineering','image':'../../assets/angular.jpg','link':'/cse'},
    {'id':2,'name':'IT','description':'IT is the course offered by the Osmania University for Bachelor of Engineering','image':'../../assets/typescript.jpg','link':'/it'},
    {'id':3,'name':'Civil','description':'Civil is the course offered by the Osmania University for Bachelor of Engineering','image':'../../assets/nodejs.jpg','link':'/civil'},
    {'id':4,'name':'Mechanical','description':'Mechanical is the course offered by the OU for Bachelor of Engineering','image':'../../assets/reactjs.jpg','link':'/mechanical'},
    
  ]
}
