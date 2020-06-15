import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let router = document.getElementById("router-to-blur")
  }
}
