import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { fade } from './router-animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fade
  ]
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

  PrepareRoute(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
