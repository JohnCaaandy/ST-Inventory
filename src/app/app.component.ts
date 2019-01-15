import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class= 'navbar navbar-expand navbar-light bg-light'>
  <a class= 'navbar-brand'>{{pageTitle}}</a>
  <ul class= 'nav nav-pills'>
  <li><a class= 'nav-link'[routerLink]="['/welcome']">Home</a></li>
  <li><a class='nav-link'[routerLink]="['/products']">Product List</a></li>
  <li><a class='nav-link'[routerLink]="['/about']">About Sterling Tackle</a></li>
  </ul>
  </nav>
  <div class='container'>
  <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageHeading: string = "Sterling Tackle Products Page";
}
