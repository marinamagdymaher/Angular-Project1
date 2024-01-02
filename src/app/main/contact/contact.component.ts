import { Component } from '@angular/core';
import { Customer } from 'src/app/ViewModels/contact/customer';
import { ContactService } from 'src/app/shared/services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  customersData :Customer[] | undefined
  title="Add New Contact"

  constructor(private contactService: ContactService){}

getAllContact(){
  return this.contactService.customersData
}

ngOnInit() : void{
  this.customersData = this.getAllContact()
}
}
