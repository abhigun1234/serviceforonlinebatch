import { Component, OnInit } from '@angular/core';
import {GteetmeService} from '..//gteetme.service'
@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor(private greet:GteetmeService) { }

  ngOnInit() {
  }
  greetMe()
  {
    this.greet.greetMe().subscribe(res=>{

    console.log(res)
   })
  }

}
