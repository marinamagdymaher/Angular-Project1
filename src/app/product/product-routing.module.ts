import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { NewProductComponent } from './new-product/new-product.component';
import { CategoriesComponent } from './categories/categories.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  { path: 'show-product/:pId', component: ShowProductsComponent },
  {
    path: 'new-product', component: NewProductComponent,
  },
  { path: 'cart', component: CartComponent },
  { path: 'product-details/:pId', component: ProductDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
