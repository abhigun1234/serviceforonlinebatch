import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {
dept=[{id:1,name:'electrical'},
{id:1,name:'mechanical'},
{id:1,name:'computer'}
]
  constructor() { }

  ngOnInit() {
  }

}
