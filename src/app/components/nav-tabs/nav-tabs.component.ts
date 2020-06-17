import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  bluring = false

  constructor
  (
    private router: Router
  ) 
  { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.bluring = true
        this.ActivateTab(event)
        document.getElementById("canvas-wrapper").querySelectorAll('canvas').forEach(n => n.style.opacity = "0"); // Remove all the child nodes

        setTimeout(() => {
          let canvasWrapper = document.getElementById("canvas-wrapper")
          let contentToBlur = document.getElementById("container")

          html2canvas(contentToBlur).then(canvas => {
            canvas.style.opacity = "0" // Set the new canvas to opacity 0
            canvas.style.transition = ".2s ease-in"
            canvasWrapper.querySelectorAll('*').forEach(n => n.remove()); // Remove all the child nodes
            canvasWrapper.appendChild(canvas) // Append canvas
            canvasWrapper.style.transform = `translateY(-${(window.innerHeight - 70)}px)` // Put it in rigth position
            canvasWrapper.querySelector('canvas').style.opacity = "1" // Reveals the canvas
            this.bluring = false
          })
  
          // Sync the canvas with the scroll
          window.onscroll = (scroll: any) => {            
            let scrolled = window.scrollY
            canvasWrapper.style.transform = `translateY(-${(window.innerHeight - 70) + scrolled}px)`
          }
        }, 100);
      }
    })
  }

  ngOnInit(): void {
    
  }

  private ActivateTab(event) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))
    document.querySelector('.' + event.url.split('/')[2]).classList.add("active")
  }
}
