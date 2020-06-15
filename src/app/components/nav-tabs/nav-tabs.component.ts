import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import html2canvas from 'html2canvas';

@Component({
  selector: 'nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  constructor
  (
    private router: Router
  ) 
  { 
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        let canvasWrapper = document.getElementById("canvas")
        let routerContent = document.getElementById("container")
        
    
        html2canvas(document.getElementById("container-blur")).then(canvas => {
          canvasWrapper.appendChild(canvas)
          canvasWrapper.style.transform = `translateY(-${window.innerHeight - 70}px)`
        })

        routerContent.onscroll = (scroll: any) => {
          let scrolled = scroll.target.scrollTop

          canvasWrapper.style.transform = `translateY(-${(window.innerHeight - 70) + scrolled}px)`
        }
      }
    })
  }

  ngOnInit(): void {
  }
}
