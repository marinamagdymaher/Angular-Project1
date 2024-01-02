import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Customer } from 'src/app/ViewModels/contact/customer';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css'],
})


export class SingleContactComponent {
  // @Output() newContactEvent = new EventEmitter<string>();
  @Input() customersData : Customer[] | undefined;
  info: any;
  profileForm = this.fb.group({
    name: [''],
    phone: [''],
  });

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.contactInfo();
  }


OnChanges() {
this.addNewContact()
}

  contactInfo(){
    this.customersData
  }

  addNewContact(){
    this.info = (this.profileForm.value)
    return this.customersData?.push(this.info)
  }
}
