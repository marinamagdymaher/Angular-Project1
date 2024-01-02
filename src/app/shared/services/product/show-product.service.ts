import { Injectable, Input } from '@angular/core';
import { Category } from 'src/app/ViewModels/product/category';
import { Product } from 'src/app/ViewModels/product/product';
import { NewProductService } from './new-product.service';

@Injectable({
  providedIn: 'root'
})
export class ShowProductService {
  productDetails?: Product[];
  newProduct: number | undefined;


  constructor(private newPrdServices: NewProductService) {
    this.productDetails = [
      {
        id: 1,
        name: 'Dress1',
        photo: 'assets/images/dress1.jpg',
        quantity: 9,
        price: 60,
        categoryId: 1,
      },
      {
        id: 2,
        name: 'Dress2',
        photo: 'assets/images/dress2.jpg',
        quantity: 9,
        price: 70,
        categoryId: 1,
      },
      {
        id: 3,
        name: 'Men1',
        photo: 'assets/images/men1.jpg',
        quantity: 9,
        price: 60,
        categoryId: 2,
      },
      {
        id: 4,
        name: 'Men2',
        photo: 'assets/images/men2.jpg',
        quantity: 9,
        price: 60,
        categoryId: 2,
      },
      {
        id: 5,
        name: 'kids1',
        photo: 'assets/images/kids1.jpg',
        quantity: 9,
        price: 60,
        categoryId: 3,
      },
      {
        id: 6,
        name: 'kids2',
        photo: 'assets/images/kids2.jpg',
        quantity: 9,
        price: 60,
        categoryId: 3,
      },
      {
        id: 7,
        name: 'kids3',
        photo: 'assets/images/kids3.jpg',
        quantity: 9,
        price: 60,
        categoryId: 3,
      },
      {
        id: 8,
        name: 'kids4',
        photo: 'assets/images/kids4.jpg',
        quantity: 9,
        price: 60,
        categoryId: 3,
      },
    ];
   }

   getAllProduct():Product[] | undefined{
    return this.productDetails
   }

  //  getProductById(prdId: number): Product[] | undefined{
  //   return this.productDetails?.find((prd)=>prd.id == prdId)
  //  }

   getProductToCategoryId(catId: number | undefined): Product[]|undefined {
    return this.productDetails?.filter(
      (product) => product.categoryId === catId
    );
  }

  ngOnChanges(): void {
    // console.log('ngOnChanges');
    // this.productDetailsBasedOnCategory = [...this.getProductToCategoryId()];
  }

  deletedProduct(dataDel:any){
    this.getAllProduct()?.splice(dataDel.id-1,1)
    // this.productDetails = this.productDetails?.filter(item => item.id !== dataDel.id)
  }

  addProducts(newItem: Product) {
    console.log(newItem);
    this.newProduct = this.getAllProduct()?.push({
      name: newItem.name,
      id: 0,
      photo: "",
      quantity: 0,
      price:  newItem.price,
      categoryId:Number(newItem.categoryId)
    });
  // console.log(this.getAllProduct());
  }



}




