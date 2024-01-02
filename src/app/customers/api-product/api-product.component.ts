import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart/cart.service';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';

@Component({
  selector: 'app-api-product',
  templateUrl: './api-product.component.html',
  styleUrls: ['./api-product.component.css'],
})
export class ApiProductComponent implements OnInit {
  prdList: any;
  constructor(private customerService: CustomerService,
    private cartService: CartService,) {}
  async ngOnInit(): Promise<void> {
    this.getAllProductApi();
  }

  addToCart(item: any) {
    console.log(item);
    this.cartService.addToCart(item);
    // window.alert('Your product has been added to the cart!');
    // console.log(item.id);
  }

  async getAllProductApi() {
    try {
      this.prdList = (await this.customerService.getAllProducts()).subscribe(
        (data: any) => {this.prdList = data,
          console.log(this.prdList);},
        );
      // this.prdList.find((item: { id: any; })=>{return item.id ===1})
    } catch (error) {
      console.log(error);
    }
  }
}
