import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//2,4 angular/http
@Injectable({
  providedIn: 'root'
})
export class GteetmeService {

  constructor(private http:HttpClient) { }

//http communcation get

greetMe()
{
   
  return this.http.get('http://rest-service.guides.spring.io/greeting')

}

}
