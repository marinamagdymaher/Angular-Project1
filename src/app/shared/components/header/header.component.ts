import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() switchTheme: any;
darkMode = signal<boolean>(false);


}
