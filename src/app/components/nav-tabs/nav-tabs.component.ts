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
        canvasWrapper.innerHTML = ""

        setTimeout(() => {
          html2canvas(document.getElementById("container-blur")).then(canvas => {
            console.log(window.scrollY)
            canvasWrapper.appendChild(canvas)
            canvasWrapper.style.transform = `translateY(-${(window.innerHeight - 70) + window.scrollY}px)`
          })
  
          window.onscroll = (scroll: any) => {            
            let scrolled = window.scrollY
            canvasWrapper.style.transform = `translateY(-${(window.innerHeight - 70) + scrolled}px)`
          }
        }, 500)
      }
    })
  }

  ngOnInit(): void {
  }
}
