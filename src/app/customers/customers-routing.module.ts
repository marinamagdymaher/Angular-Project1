import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path:'update/:pId', component: UpdateProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
