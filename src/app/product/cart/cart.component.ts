import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/ViewModels/product/product';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: any;
constructor(private route: ActivatedRoute,
  private cartService: CartService){}
  ngOnInit(): void{
    this.cart = this.cartService.getItems()
  }

getAllCart(){
  this.cartService.getItems()
}
}
