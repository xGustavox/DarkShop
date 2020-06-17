import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  loading = true
  produtos_l = []
  produtos_r = []
  produtos = [
    {
      id: 0,
      imgPath: '/assets/imgs/livroteste.png'
    },
    {
      id: 1,
      imgPath: '/assets/imgs/popTeste.png'
    },
    {
      id: 2,
      imgPath: '/assets/imgs/tom.png'
    },
    {
      id: 3,
      imgPath: '/assets/imgs/132451436_1GG.png'
    },
    {
      id: 4,
      imgPath: '/assets/imgs/132451516_1GG.png'
    },
    {
      id: 5,
      imgPath: '/assets/imgs/132451997_1GG.png'
    }
  ]

  constructor() 
  { 
    this.produtos.map((p, i) => {
      if (i % 2 == 0)
        this.produtos_l.push(p)
      else
        this.produtos_r.push(p)
    })

  }

  ngOnInit(): void {
  }
}
