import { Component, Input, TrackByFunction } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/ViewModels/product/category';
import { Product } from 'src/app/ViewModels/product/product';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { ShowProductService } from 'src/app/shared/services/product/show-product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
})
export class ShowProductsComponent {
  // @Input() createNewProduct: any;
  newProduct?: any;
  selectedCategory: string | null = '1';
  productDetailsBasedOnCategory?: Product[];

  constructor(
    private productService: ShowProductService,
    private activeRoute: ActivatedRoute,
    private cartService: CartService,
  ) {}

  getAllProduct(): Product[] | undefined {
    return this.productService.getAllProduct();
  }

  ngOnChanges(): void {
    // const data = this.createNewProduct;
    // this.productDetailsBasedOnCategory =
    //   this.productService.getProductToCategoryId(Number(this.selectedCategory));
    // console.log(this.productDetailsBasedOnCategory);
  }

  ngOnInit(): void {
    this.selectedCategory = this.activeRoute.snapshot.paramMap.get('pId');
    this.productDetailsBasedOnCategory =
      this.productService.getProductToCategoryId(Number(this.selectedCategory));

    }

  addToCart(item: any) {
    console.log(item);
    this.cartService.addToCart(item);
    // window.alert('Your product has been added to the cart!');
    // console.log(item.id);
  }

  updateItem(item: any) {
    console.log('update Item');
    console.log(item);
  }

  deleteItem(deleted: any) {
    // this.productDetailsBasedOnCategory = this.productDetailsBasedOnCategory?.filter(item => item.id !== deleted.id)
    this.productService.deletedProduct(deleted);
    this.productDetailsBasedOnCategory =
      this.productService.getProductToCategoryId(Number(this.selectedCategory));
  }

  addProducts(newItem: Product) {
    this.productService.addProducts(newItem)
    this.productDetailsBasedOnCategory =
    this.productService.getProductToCategoryId(Number(this.selectedCategory));
  }
}
