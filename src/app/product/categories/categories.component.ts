import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import {  ProductCategory } from 'src/app/ViewModels/product/product';
import { Category } from 'src/app/ViewModels/product/category';
import { Product } from 'src/app/ViewModels/product/product';
import { ProductCategoryService } from 'src/app/shared/services/product/product-category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categoryDetails?: Category[]
  selectedCategory: number = 1;
  // filterProduct: Product[]| undefined;

  constructor(private categoryService: ProductCategoryService,
    private router:Router, private activeRoute:ActivatedRoute) {}

  getAllCategory(){
    return this.categoryService.categoryList
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.categoryDetails = this.getAllCategory()
    // const prdId= this.activeRoute.snapshot.params['pId']
  }

  ngOnChanges() {
    // this.selectedCategory = this.categoryService.getProductByCategory(i)
  }

  getCategoryProduct(i: number) {
    this.selectedCategory = i + 1;
    // this.categoryService.getProductByCategory(this.selectedCategory)
  }
  // showProductDetails(id: number){
  //   console.log(id);
  // }

}
