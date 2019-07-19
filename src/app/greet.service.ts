import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class GreetService {

  constructor(private http :HttpClient) { }

  greetMe()
  {
    return this.http.get('http://rest-service.guides.spring.io/greeting')
  }
}
