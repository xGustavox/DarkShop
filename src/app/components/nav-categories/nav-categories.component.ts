import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss']
})
export class NavCategoriesComponent implements OnInit {

  type = 1
  @Output() categoryChange = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  Click(category) {
    this.type = category

    document.querySelectorAll('.nav').forEach(n => n.classList.remove('active'))
    document.querySelector('.type' + this.type).classList.add('active')

    this.categoryChange.emit(category)
  }
}
