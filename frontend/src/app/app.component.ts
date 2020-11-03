import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router'
import { GoogleTagManagerService } from 'angular-google-tag-manager';
import { fade } from './router-animation'
import { environment } from 'src/environments/environment';
import { NaggingService } from './core/services/nagging/nagging.service';

declare var gtag;

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
  showModalNagging = null
  
  constructor
  (
    private gtmService: GoogleTagManagerService,
    private router: Router,
    private naggingService: NaggingService
  ) 
  {
    this.isMobile = window.innerWidth <= 768

    window.onresize = () => {
      this.isMobile = window.innerWidth <= 768
    }

    this.router.events.forEach(item => {
      if (item instanceof NavigationEnd) {

        const gtmTag = {
          event: 'page',
          pageName: item.url
        };

        this.gtmService.pushTag(gtmTag);
      }
    });

    if (localStorage.getItem('darkPatterned') == undefined)
      localStorage.setItem('darkPatterned', `{"darkPatterned": ${Math.random() < 0.5 ? true : false}}`)

    this.NaggingSync()
  }

  NaggingSync() {
    this.naggingService.naggingModalSubject.subscribe(res => {
      this.showModalNagging = res
    })
  }

  PrepareRoute(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
