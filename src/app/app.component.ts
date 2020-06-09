import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DarkShoop'
  isMobile = false

  constructor() {
    this.isMobile = window.innerWidth <= 768

    window.onresize = () => {
      this.isMobile = window.innerWidth <= 768
    }
  }
}
