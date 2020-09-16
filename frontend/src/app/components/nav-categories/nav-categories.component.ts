import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlurService } from 'src/app/services/blur/blur.service';

@Component({
  selector: 'nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss']
})
export class NavCategoriesComponent implements OnInit {

  type = 1
  @Output() categoryChange = new EventEmitter()

  constructor(
    private blurService: BlurService
  ) { }

  ngOnInit(): void {
  }

  Click(category) {
    this.type = category

    document.querySelectorAll('.nav').forEach(n => n.classList.remove('active'))
    document.querySelector('.type' + this.type).classList.add('active')

    this.categoryChange.emit(category)
    this.blurService.Blur()
  }
}
