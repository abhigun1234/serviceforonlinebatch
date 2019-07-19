import { Component, OnInit } from '@angular/core';
import {GreetService} from '..//greet.service'
@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
 id=''
 content=''
  constructor(private greetService: GreetService) { }

  ngOnInit() {
  }
  greet()
  {
    this.greetService.greetMe().subscribe(res=>{

      // console.log(res)
      // this.id=res.id
      // this.content=res.content;
    })
  }

}
