import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ApiProductComponent } from './api-product/api-product.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    CustomersComponent,
    ApiProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
  ],

})
export class CustomersModule { }
