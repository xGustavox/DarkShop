import { ElementRef, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class BlurService {

  canvasWrapper: ElementRef

  constructor(private router: Router) { 
  }

  setCanvasWrapper(canvasWrapper) {
    this.canvasWrapper = canvasWrapper

    this.InitializeBlur()
  }

  InitializeBlur() {
    this.Blur()

    this.router.events.subscribe(event => {

      if (event instanceof NavigationEnd)
        this.Blur()
    })
  }

  SyncCanvasWithScroll() {
    window.onscroll = (scroll) => {
      let scrolled = scroll.target.scrollingElement.scrollTop
      this.canvasWrapper.nativeElement.style.transform = `translateY(-${(window.innerHeight - 70) + scrolled}px)`
    }
  }

  Blur() {
    if (!this.canvasWrapper)
      return

    this.canvasWrapper.nativeElement.innerHTML = ''

    setTimeout(() => {
      const contentToBlur = document.getElementById("container")

      if (contentToBlur) {
        html2canvas(contentToBlur).then(canvas => {
          canvas.style.transition = '.1s ease-in-out'
          canvas.style.opacity = '0'
  
          this.canvasWrapper.nativeElement.append(canvas)
          this.canvasWrapper.nativeElement.style.transform = `translateY(-${(window.innerHeight - 70)}px)`
  
          canvas.style.opacity = '1'
        })
      }
    }, 500)

    this.SyncCanvasWithScroll()
  }
}
