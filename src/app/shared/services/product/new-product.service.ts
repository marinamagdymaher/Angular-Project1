import { Injectable } from '@angular/core';
import { Product } from 'src/app/ViewModels/product/product';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {
  // selectedCategory: number = 1;
  title="Add New Product"
  addNewProduct?: Product[];
  items = ['item1', 'item2', 'item3', 'item4'];
  constructor() { }


  addItem(newItem: string) {
    this.items.push(newItem);
    console.log(newItem);
  }

  submit(data :object){
    console.log(data);
  }

  openModal() {
    const displayModal = document.getElementById('exampleModal');
    if (displayModal != null) {
      displayModal.style.display = 'block';
      displayModal.classList.add('show');
      displayModal.style.backdropFilter = 'blur(10px)'
      displayModal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
    }
  }

  closeModal() {
    const displayModal = document.getElementById('exampleModal');
    if (displayModal != null) {
      displayModal.classList.remove('show');
      displayModal.style.display = 'none';
    }
  }
}
