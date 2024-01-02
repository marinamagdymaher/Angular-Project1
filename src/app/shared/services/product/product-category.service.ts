import { Injectable } from '@angular/core';
import { Category } from 'src/app/ViewModels/product/category';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  categoryList: Category[] | undefined;
  selectedCategory: number = 1;
  // filterProduct: Product[]| undefined;

  constructor() {
    this.categoryList = [
      { id: 1, name: 'Women', photo: 'assets/images/women.jpg', quantity: 3 },
      { id: 2, name: 'Mens', photo: 'assets/images/men.jpg', quantity: 7 },
      { id: 3, name: 'kids', photo: 'assets/images/kids.jpg', quantity: 9 },
    ];
  }

  ngOnChanges(): void {
    // console.log('ngOnChanges');
    // changes.prop contains the old and the new value...
  }

  ngOnInit(): void {
    // console.log('ngOnInit');
    // console.log(this.getProductByCategory());
  }

  // getProductByCategory(i: number) {
  //   this.selectedCategory = i + 1;
  // }



}
