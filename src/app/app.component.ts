import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from './../environments/environment';
// import {OverLayContainer }
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit  {
  title = 'weather-app';
  switchTheme = new FormControl(false)


  constructor(){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
