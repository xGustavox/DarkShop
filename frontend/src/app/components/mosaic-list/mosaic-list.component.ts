import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mosaic-list',
  templateUrl: './mosaic-list.component.html',
  styleUrls: ['./mosaic-list.component.scss']
})
export class MosaicListComponent implements OnInit {

  @Input('itemList') itemList

  produtos_l
  produtos_r

  constructor() { }

  ngOnInit(): void {
    this.produtos_l = []
    this.produtos_r = []

    this.itemList.forEach((p, i) => {
      if (i % 2 == 0)
        this.produtos_l.push(p)
      else
        this.produtos_r.push(p)
    });
  }

  ngAfterContentInit() {
    this.produtos_l = []
    this.produtos_r = []

    this.itemList.forEach((p, i) => {
      if (i % 2 == 0)
        this.produtos_l.push(p)
      else
        this.produtos_r.push(p)
    });
  }
}
