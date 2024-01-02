import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  data:any
  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    // this.updateProduct()
    // this.customerService.getAllProducts()
  }

  getProduct() {
    const id = this.route.snapshot.paramMap.get('id');
  }
  save(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    // this.data = this.customerService.getAllProducts().filter((item:any)=>item.id==id)
    // this.customerService.updateProduct(this.data)
  }
  // updateProduct() {
  //   let id = this.route.snapshot.paramMap.get('id');
  //   this.data = this.customerService.getAllProducts()
  //     .filter((item: { id: string | null }) => item.id == id);
  //     console.log(this.data)
  //   // this.customerService.updateData(this.data)
  // }

}
