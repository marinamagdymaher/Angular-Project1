import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/ViewModels/product/product';
import { NewProductService } from 'src/app/shared/services/product/new-product.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent {
  title="New Product Form"
  @Output() newProductEvent = new EventEmitter<any>();

  NewproductForm = this.fb.group({
    name: [''],
    price: [''],
    photo: [null],
    categoryId:[''],
  });
;

  constructor(private newProductServices: NewProductService,
    private fb: FormBuilder) {}

  submit(data: object) {
    this.newProductServices.submit(data);
  }

  openModal() {
    this.newProductServices.openModal();
  }

  closeModal() {
    this.newProductServices.closeModal();
  }

  // addNewProduct() {
  //   this.newProductEvent.emit(this.NewproductForm);
  // }

  onSubmit(): void{
    this.newProductEvent.emit(this.NewproductForm.value);
    // console.log(this.NewproductForm.value);
  }

}
