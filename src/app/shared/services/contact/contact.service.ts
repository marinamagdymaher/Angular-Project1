import { Injectable } from '@angular/core';
import { Customer } from 'src/app/ViewModels/contact/customer';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  customersData ?: Customer[]

  constructor() {
    this.customersData = [
      { name: 'Ebony', phone: '09878797' },
      { name: 'Chiho', phone: '09878797888' },
      { name: 'jojjj', phone: '09878797777' },
      { name: 'Ehab', phone: '09878797777' },
    ];
  }
}
