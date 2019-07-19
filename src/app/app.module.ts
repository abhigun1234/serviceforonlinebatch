import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptComponent } from './dept/dept.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { GreetComponent } from './greet/greet.component';
import {GreetService} from './/greet.service';
import { GreetingComponent } from './greeting/greeting.component'
@NgModule({
  declarations: [
    AppComponent,
    DeptComponent,
    ProductComponent,
    ProductdetailsComponent,
    GreetComponent,
    GreetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GreetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
