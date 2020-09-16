import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class BlurService {

  constructor() { }

  Blur() {
    setTimeout(() => {

      document.getElementById("canvas-wrapper").querySelectorAll('canvas').forEach(n => n.style.opacity = "0"); // Remove all the child nodes
  
      let canvasWrapper = document.getElementById("canvas-wrapper")
      let contentToBlur = document.getElementById("container")
  
      html2canvas(contentToBlur).then(canvas => {
        canvas.style.opacity = "0" // Set the new canvas to opacity 0
        canvas.style.transition = ".2s ease-in"
        canvasWrapper.querySelectorAll('*').forEach(n => n.remove()); // Remove all the child nodes
        canvasWrapper.appendChild(canvas) // Append canvas
        canvasWrapper.style.transform = `translateY(-${(window.innerHeight - 70)}px)` // Put it in rigth position
        canvasWrapper.querySelector('canvas').style.opacity = "1" // Reveals the canvas
      })
  
      let scrolled = window.scrollY
      canvasWrapper.style.transform = `translateY(-${(window.innerHeight - 70) + scrolled}px)`
    }, 100)
  }
}
