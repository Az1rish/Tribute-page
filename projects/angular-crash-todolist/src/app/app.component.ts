import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Shane';

  constructor() {
    console.log(123);
    this.name = "Mr. McNeil"
  }
}
