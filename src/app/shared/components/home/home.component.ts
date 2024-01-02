import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isServiceDisplay: boolean = true;
  services = ['Marketing', 'Accounting', 'IT'];

  ngOnInit() {
    // ...
  }

  toggleServices() {
    this.isServiceDisplay = !this.isServiceDisplay;
    // this.visible = !this.visible;
  }
}
