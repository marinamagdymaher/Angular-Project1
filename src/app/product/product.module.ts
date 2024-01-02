import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UpdateProductsComponent } from './update-products/update-products.component';

@NgModule({
  declarations: [
    ProductComponent,
    CategoriesComponent,
    NewProductComponent,
    ShowProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    UpdateProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
